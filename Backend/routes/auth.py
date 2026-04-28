from fastapi import APIRouter, HTTPException
from database import db
from models import User
from utils.auth import hash_password, verify_password, create_access_token
from models import User, LoginUser

router = APIRouter()

users = db["users"]

# 🔐 Signup
@router.post("/signup")
def signup(user: User):
    try:
        if users.find_one({"email": user.email}):
            raise HTTPException(status_code=400, detail="User already exists")

        user_data = user.model_dump()


        password = user.password[:72]

        user_data["password"] = hash_password(password)

        users.insert_one(user_data)

        return {"message": "User created successfully"}

    except Exception as e:
        return {"error": str(e)}
    

# 🔐 Login
@router.post("/login")
def login(user: LoginUser):
    db_user = users.find_one({"email": user.email})

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": user.email})

    return {"access_token": token, "token_type": "bearer"}