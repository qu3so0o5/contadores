from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

contador = 0

@app.get("/contador")
def obtener():
    return {"contador": contador}

@app.put("/contador/{valor}")
def actualizar(valor: int):
    global contador
    contador = valor
    return {"contador": contador}