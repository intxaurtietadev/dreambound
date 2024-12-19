from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

# Configuración de la aplicación Flask
app = Flask(__name__)
CORS(app)

# Clave de la API de OpenAI
import os
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route('/generar', methods=['POST'])
def generar_narrativa():
    data = request.get_json()
    prompt = data.get("prompt", "")

    try:
        # Solicitud a la API de OpenAI
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"Escribe un sueño oscuro basado en: {prompt}",
            max_tokens=150
        )
        texto_generado = response.choices[0].text.strip()
        return jsonify({"text": texto_generado})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
