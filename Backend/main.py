from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.property import router as property_router
from routes.auth import router as auth_router



app = FastAPI()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.property import router as property_router
from routes.auth import router as auth_router

from routes.ai import router as ai_router

app = FastAPI()

# ✅ CORS MUST COME FIRST
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ghruha.netlify.app"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ THEN routes
app.include_router(property_router)
app.include_router(auth_router)

app.include_router(ai_router)


@app.get("/")
def home():
    return {"message": "Backend running 🚀"}