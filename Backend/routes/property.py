from fastapi import APIRouter
from database import db
from models import Property
from fastapi import APIRouter, UploadFile, File, Form
from typing import List

router = APIRouter()
collection = db["properties"]

from fastapi import APIRouter, UploadFile, File, Form
from typing import List

@router.post("/add-property")
async def add_property(
    property_type: str = Form(...),
    property_price: int = Form(...),
    property_location: str = Form(...),
    property_bedrooms: int = Form(...),
    property_bathrooms: int = Form(...),
    property_area: int = Form(...),
    property_title: str = Form(...),
    property_description: str = Form(...),
    property_photos: List[UploadFile] = File(...)
):
    # 🚫 DO NOT store file bytes
    image_names = []

    for photo in property_photos:
        image_names.append(photo.filename)  # ✅ only store name

    property_data = {
        "type": property_type,
        "price": property_price,
        "location": property_location,
        "bedrooms": property_bedrooms,
        "bathrooms": property_bathrooms,
        "area": property_area,
        "title": property_title,
        "description": property_description,
        "images": image_names   # ✅ safe
    }

    collection.insert_one(property_data)

    return {"message": "Property added successfully"}



# 📥 Get All Properties
@router.get("/properties")
def get_properties():
    properties = list(collection.find({}, {"_id": 0}))
    return properties