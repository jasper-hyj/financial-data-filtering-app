# Data Model for API Response
from pydantic import BaseModel


class IncomeStatement(BaseModel):
    date: str
    revenue: int
    netIncome: int
    grossProfit: int
    eps: float
    operatingIncome: int