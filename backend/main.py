from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Mount the React build folder
app.mount("/static", StaticFiles(directory="frontend/build/static"), name="static")

# Serve the React index.html
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    return FileResponse("frontend/build/index.html")


# Example API route
@app.get("/api/example")
async def read_example():
    return {"message": "Hello from FastAPI + React!"}
