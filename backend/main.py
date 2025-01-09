from fastapi import FastAPI, HTTPException
from typing import List
from fastapi.staticfiles import StaticFiles
import requests
import os

from backend.model import IncomeStatement

app = FastAPI()

# Configuring API and keys
BASE_URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL"
API_KEY = os.environ.get('API_KEY')


# Helper function to fetch data from the API for AAPL
def fetch_data_from_api():
    url = f"{BASE_URL}?apikey={API_KEY}"
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch data from the API.")


# Fetch, filter, and sort the data
@app.get("/api/data", response_model=List[IncomeStatement])
async def get_data():
    
    # Fetching data
    data = fetch_data_from_api()

    # Map the data into the required model
    results = [
        IncomeStatement(
            date=item["date"],
            revenue=item["revenue"],
            netIncome=item["netIncome"],
            grossProfit=item["grossProfit"],
            eps=item["eps"],
            operatingIncome=item["operatingIncome"]
        ) for item in data
    ]
    return results

# API for all other request(static files)
app.mount("/", StaticFiles(directory="frontend/build", html=True), name="static")