import pandas as pd
from sklearn.linear_model import LinearRegression

# Sample dataset
data = {
    "area": [1000, 1200, 1500, 1800, 2000],
    "bedrooms": [2, 2, 3, 3, 4],
    "price": [10000, 12000, 15000, 18000, 22000]
}

df = pd.DataFrame(data)

X = df[["area", "bedrooms"]]
y = df["price"]

model = LinearRegression()
model.fit(X, y)

# 🔥 Price prediction
def predict_price(area, bedrooms):
    return int(model.predict([[area, bedrooms]])[0])

# 🔥 Demand prediction
def predict_demand(area, bedrooms, price, location):
    expected_price = predict_price(area, bedrooms)

    # 📊 Price factor
    price_ratio = price / expected_price

    if price_ratio < 0.9:
        price_score = 90
    elif price_ratio <= 1.1:
        price_score = 75
    else:
        price_score = 50

    # 📍 Location score (manual for now)
    location_scores = {
        "Hyderabad": 90,
        "Warangal": 75,
        "Delhi": 85,
        "Bangalore": 95,
        "Mumbai": 92
    }

    location_score = location_scores.get(location, 70)

    # 🏠 Bedroom factor
    bedroom_score = 80 if bedrooms <= 3 else 65

    # 🎯 Final score
    demand_score = int((price_score + location_score + bedroom_score) / 3)

    return demand_score