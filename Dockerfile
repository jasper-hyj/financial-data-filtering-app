# Base image for Node.js
FROM node:18

# Set the working directory for the React app
WORKDIR /app

# Setup Frontend
WORKDIR /app/frontend
COPY frontend/ /app/frontend/
RUN npm install
RUN npm run build

# Install Python and create virtual environment for the backend
WORKDIR /app/backend
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Copy backend code
COPY backend/ /app/backend/

# Create a virtual environment and activate it
RUN python3 -m venv /app/backend/venv

# Install the required backend Python dependencies inside the virtual environment
RUN /app/backend/venv/bin/pip install -r /app/backend/requirements.txt

# Expose the port FastAPI will run on
EXPOSE 8000

WORKDIR /app

# Start the backend server using the virtual environment
CMD ["/app/backend/venv/bin/uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]