# Data Model for API Response
from typing import Optional
from pydantic import BaseModel


class IncomeStatement(BaseModel):
    date: str
    revenue: int
    netIncome: int
    grossProfit: int
    eps: float
    operatingIncome: int


# Filter Parameters
class FilterParams(BaseModel):
    start_year: Optional[int] = None
    end_year: Optional[int] = None
    revenue_min: Optional[int] = None
    revenue_max: Optional[int] = None
    net_income_min: Optional[int] = None
    net_income_max: Optional[int] = None
    sort_by: Optional[str] = None  # "date", "revenue", "netIncome"
    sort_order: Optional[str] = "asc"  # "asc" or "desc"