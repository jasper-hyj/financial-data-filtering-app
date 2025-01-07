from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# Example API route
@app.get("/api/example")
async def read_example():
    return {"message": "Hello from FastAPI + React!"}

# Serve the React index.html (or fallback to the frontend for SPA)
@app.get("/")
async def serve_index():
    index_path = os.path.join("frontend", "build", "index.html")
    return FileResponse(index_path)
