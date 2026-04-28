async function predict() {
  const area = document.getElementById("area").value;
  const bedrooms = document.getElementById("bedrooms").value;
  const price = document.getElementById("price").value;
  const location = document.getElementById("location").value;

  const BASE_URL = "https://ghruha.onrender.com";


  const res = await fetch('${BASE_URL}/predict', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      area: Number(area),
      bedrooms: Number(bedrooms),
      price: Number(price),
      location: location
    })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <p>💰 Expected Rent: ₹${data.predicted_price}</p>
    <p>📊 Demand Score: ${data.demand_score}%</p>
  `;
}