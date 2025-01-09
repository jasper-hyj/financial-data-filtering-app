# Finance Data Filtering App

This is a financial data filtering app using data from Finance Modeling Prep API endpoint. The app fetch
annual income statements for AAPL (Apple) and allow users to filter and analyze key metrics.

## Live Deployed: https://financial-data-filtering-app.onrender.com/
- It may required some time for the live version to load, reload the webpage if it's not loading.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Python installed (version 3.10.11 or later)
-   Node.js installed (version 20 or later)

## Local Setup Instruction (Using Docker)
- Make sure docker installed and launched

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/jasper-hyj/financial-data-filtering-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd finance-data-filtering-app
    ```

3. Create `.env` file in root (based on .env.example)

4. Build Docker Image
    ```bash
    docker build -t finance-data-filtering-app .
    ```

5. Run Application in container
    ```bash
    docker run --env-file .env -p 8000:8000 finance-data-filtering-app
    ```

6. Check Application running on http://localhost:8000

## Local Setup Instruction (Without Docker)
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/jasper-hyj/financial-data-filtering-app.git
    ```

2. Navigate into the project directory:
    ```bash
    cd finance-data-filtering-app
    ```

3. Create `.env` file in root (based on .env.example)

4. Change to the frontend folder
    ```bash
    cd frontend
    ```

5. Download essential packages (8 vulnerabilities alert is ignorable)
    ```bash
    npm install
    ```

6. Build the project
    ```bash
    npm run build
    ```

7. Move to main folder
    ```bash
    cd ..
    ```

8. Create python virtual environment
    ```bash
    python3 -m venv venv
    ```

9. Run Python virtual environment
    ```bash
    # For Windows
    .\venv\Scripts\activate 

    # For MacOS/Linux
    source ./venv/bin/activate
    ```

10. Update Python package
    ```bash
    pip install -r backend/requirements.txt
    ```

11. Start the application
    ```bash
    uvicorn backend.main:app --host 0.0.0.0 --port 8000
    ```

11. Check Application running on http://localhost:8000
