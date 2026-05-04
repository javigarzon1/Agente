import streamlit as st
import subprocess
import sys
import os

def main():
    # Ruta real de tu app Streamlit
    app_path = os.path.join(os.path.dirname(__file__), "agente", "app.py")

    # Ejecuta Streamlit apuntando a tu app real
    subprocess.run([
        sys.executable, "-m", "streamlit", "run", app_path
    ])

if __name__ == "__main__":
    main()