document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Sending:", email, password); // 👈 DEBUG

  const BASE_URL = "https://ghruha.onrender.com";
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log("Response:", data); // 👈 DEBUG

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      window.location.href = "index.html";
    } else {
      alert("❌ " + (data.detail || "Login failed"));
    }

  } catch (error) {
    console.error(error);
    alert("❌ Server error");
  }
});