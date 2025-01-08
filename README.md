# Finance Data Filtering App

This is a financial data filtering app using data from Finance Modeling Prep API endpoint. The app fetch
annual income statements for AAPL (Apple) and allow users to filter and analyze key metrics.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Python installed (version 3.10.11 or above)

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

4. Setup Frontend
```bash
cd frontend
```

4. Setup Python virtual environment
```bash
python3 -m venv venv
```

1. Run Python virtual environment
For Windows: 
```bash
.\env\Scripts\activate 
```

For Mac or Linux:
```bash
source ./venv/bin/activate
```



1. Check Application running on http://localhost:8000