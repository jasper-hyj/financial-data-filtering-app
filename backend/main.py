from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.responses import FileResponse
from typing import List
from fastapi.staticfiles import StaticFiles
import requests
import os

from backend.model import FilterParams, IncomeStatement

app = FastAPI()

# Configuring API and keys
BASE_URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL"
API_KEY = os.environ.get('API_KEY')


# Helper function to fetch data from the API for AAPL
def fetch_data_from_api(params: dict):
    url = f"{BASE_URL}?apikey={API_KEY}"
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch data from the API.")


# Fetch, filter, and sort the data
@app.get("/api/data", response_model=List[IncomeStatement])
async def get_data(filters: FilterParams = Depends()):
    # Prepare query params based on filters
    params = {}
    
    # Fetching data
    data = fetch_data_from_api(params=params)

    # Year filter
    if filters.start_year and filters.end_year:
        data = [item for item in data if int(item['date'][:4]) >= filters.start_year and int(item['date'][:4]) <= filters.end_year]
    
    # Revenue range filter
    if filters.revenue_min is not None and filters.revenue_max is not None:
        data = [item for item in data if filters.revenue_min <= item['revenue'] <= filters.revenue_max]
    
    # Net income range filter
    if filters.net_income_min is not None and filters.net_income_max is not None:
        data = [item for item in data if filters.net_income_min <= item['netIncome'] <= filters.net_income_max]

    # Sorting based on user's choice (date, revenue, netIncome)
    if filters.sort_by:
        reverse = True if filters.sort_order == "desc" else False
        data = sorted(data, key=lambda x: x[filters.sort_by], reverse=reverse)

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

app.mount("/", StaticFiles(directory="frontend/build", html=True), name="static")