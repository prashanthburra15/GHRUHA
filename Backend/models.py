from pydantic import BaseModel

class LoginUser(BaseModel):
    email: str
    password: str

class User(BaseModel):
    username: str
    email: str
    password: str


class Property(BaseModel):
    title: str
    location: str
    price: int
    available: bool
    owner: str