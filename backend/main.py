from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Serve React build files
app.mount("/static", StaticFiles(directory="../frontend/build/static"), name="static")

# Serve React's index.html for the root route and all unmatched routes
@app.get("/{full_path:path}")
async def serve_react(full_path: str):
    return FileResponse("../frontend/build/index.html")

# Example API route
@app.get("/api/example")
async def read_example():
    return {"message": "Hello from FastAPI + React on Vercel!"}
