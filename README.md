# 🏠 GHRUHA.COM – AI-Powered Rental Platform

GHRUHA.COM is a full-stack web application that allows users to **post properties, explore listings, and get AI-based rental price predictions**.
The platform integrates **machine learning, backend APIs, and a modern frontend** to deliver a real-world housing solution.

---

## 🚀 Live Demo

* 🌐 Frontend: https://ghruha.netlify.app
* ⚙️ Backend API: https://ghruha.onrender.com
* 📄 API Docs: https://ghruha.onrender.com/docs

---

## ✨ Features

* 🔐 User Authentication (Signup/Login with JWT)
* 🏡 Post Property Listings with details and images
* 🔍 Search properties by location and type
* 🤖 AI-based Rent Prediction (ML model)
* 📊 Demand Score calculation
* 🌐 Fully deployed (Frontend + Backend)

---

## 🛠️ Tech Stack

### 💻 Frontend

* HTML, CSS, JavaScript
* Responsive UI with modern design

### ⚙️ Backend

* FastAPI (Python)
* REST APIs
* JWT Authentication

### 🗄️ Database

* MongoDB Atlas

### 🤖 AI / ML

* Linear Regression (scikit-learn)
* Pandas for data processing

### ☁️ Deployment

* Backend: Render
* Frontend: Netlify

---

## 📂 Project Structure

```
Ghruha/
│
├── Backend/
│   ├── main.py
│   ├── routes/
│   │   ├── auth.py
│   │   ├── property.py
│   │   └── ai.py
│   ├── models.py
│   └── utils/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── predict.html
│   ├── js/
│   └── css/
│
└── README.md
```

---

## 🔐 Authentication Flow

1. User signs up → password is hashed (bcrypt)
2. User logs in → JWT token generated
3. Token stored in frontend (localStorage)
4. Protected routes use Bearer token

---

## 🤖 AI Model

* Model: Linear Regression
* Inputs:

  * Area
  * Bedrooms
  * Location
  * Price
* Outputs:

  * Predicted Rent
  * Demand Score

---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/prashanthburra15/GHRUHA.git
cd GHRUHA
```

---

### 2️⃣ Backend Setup

```bash
cd Backend
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

pip install -r requirements.txt
uvicorn main:app --reload
```

---

### 3️⃣ Frontend Setup

Just open:
```
frontend/index.html
```

---

## 🌟 Key Highlights

* ✔ Built full-stack application from scratch
* ✔ Deployed on cloud platforms
* ✔ Integrated AI model into real application
* ✔ Implemented secure authentication
* ✔ Designed scalable backend APIs

---

## 📌 Future Improvements

* 📍 Map-based property search
* ❤️ Save / favorite properties
* 📷 Image upload optimization
* 📊 Advanced ML models
* 🔔 Notifications system

---

## 👨‍💻 Author

**Prashanth Burra**

* GitHub: https://github.com/prashanthburra15
* LinkedIn: https://linkedin.com/in/burra-prashanth

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
