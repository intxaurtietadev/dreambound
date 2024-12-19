from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import openai

# Configuración de Flask
app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)

# Clave API de OpenAI
import os
openai.api_key = os.getenv("OPENAI_API_KEY")

# Ruta principal
@app.route('/')
def home():
    return render_template('index.html')

# Ruta para la generación de narrativa
@app.route('/generar', methods=['POST'])
def generar_narrativa():
    data = request.get_json()
    prompt = data.get("prompt", "")

    try:
        # Solicitud a OpenAI
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
