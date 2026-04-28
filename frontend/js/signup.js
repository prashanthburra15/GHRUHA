document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // ✅ Check passwords match
  if (password !== confirmPassword) {
    alert("❌ Passwords do not match");
    return;
  }

  try {
    const res = await fetch("https://ghruha.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (data.message) {
      alert("✅ Signup successful!");
      window.location.href = "login.html";
    } else {
      alert(data.detail || "❌ Signup failed");
    }

  } catch (error) {
    console.error(error);
    alert("❌ Server error");
  }
});
