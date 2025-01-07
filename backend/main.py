from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel
from typing import List, Optional
import requests
import os

from backend.income_statement import IncomeStatement

app = FastAPI()

# Configuring API and keys
API_KEY = os.environ.get('API_KEY')
BASE_URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL"


# Query Parameters for Filtering
class FilterParams(BaseModel):
    start_year: Optional[int] = None
    end_year: Optional[int] = None
    revenue_min: Optional[int] = None
    revenue_max: Optional[int] = None
    net_income_min: Optional[int] = None
    net_income_max: Optional[int] = None
    sort_by: Optional[str] = None  # "date", "revenue", "netIncome"
    sort_order: Optional[str] = "asc"  # "asc" or "desc"

# Helper function to fetch data from the API for AAPL
def fetch_data_from_api(params: dict):
    url = f"{BASE_URL}?apikey={API_KEY}"
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch data from the API.")
    
@app.get("/")
async def serve_index():
    index_path = os.path.join("frontend", "build", "index.html")
    return FileResponse(index_path)

# Fetch, filter, and sort the data
@app.get("/api/data", response_model=List[IncomeStatement])
async def get_data_aapl(filters: FilterParams = Depends()):
    # Prepare query params based on filters
    params = {}
    
    # Fetching data
    data = fetch_data_from_api(params=params)

    # Filter based on year range
    if filters.start_year and filters.end_year:
        data = [item for item in data if int(item['date'][:4]) >= filters.start_year and int(item['date'][:4]) <= filters.end_year]
    
    # Filter based on revenue range
    if filters.revenue_min is not None and filters.revenue_max is not None:
        data = [item for item in data if filters.revenue_min <= item['revenue'] <= filters.revenue_max]
    
    # Filter based on net income range
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

