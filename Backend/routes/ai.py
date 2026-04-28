from fastapi import APIRouter
from pydantic import BaseModel
from ai_model import predict_price, predict_demand

router = APIRouter()

class PredictionInput(BaseModel):
    area: int
    bedrooms: int
    price: int
    location: str

@router.post("/predict")
def predict(data: PredictionInput):
    price = predict_price(data.area, data.bedrooms)
    demand = predict_demand(data.area, data.bedrooms, data.price, data.location)

    return {
        "predicted_price": price,
        "demand_score": demand
    }