# Data Model for API Response
from pydantic import BaseModel

# Income statement object
class IncomeStatement(BaseModel):
    date: str
    revenue: int
    netIncome: int
    grossProfit: int
    eps: float
    operatingIncome: int