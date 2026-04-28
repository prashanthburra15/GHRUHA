// 🔥 AI Suggestion Function
async function getAISuggestion() {
  const area = document.getElementById("property-area")?.value;
  const bedrooms = document.getElementById("property-bedrooms")?.value;
  const location = document.getElementById("property-location")?.value;
  const price = document.getElementById("property-price")?.value;
  const BASE_URL = "https://ghruha.onrender.com";

  // 🚫 Skip if required fields empty
  if (!area || !bedrooms || !location) return;
  
  try {
    const res = await fetch(`${BASE_URL}/redict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        area: Number(area),
        bedrooms: Number(bedrooms),
        price: Number(price || 0),
        location: location
      })
    });

    const data = await res.json();

    // 🎯 Demand text
    let demandText = "";
    if (data.demand_score > 80) {
      demandText = " High Demand";
    } else if (data.demand_score > 60) {
      demandText = " Medium Demand";
    } else {
      demandText = " Low Demand";
    }

    // 🧠 Show AI result
    const resultDiv = document.getElementById("ai-suggestion");
    if (resultDiv) {
      resultDiv.innerHTML = `
        💡 Suggested Rent: ₹${data.predicted_price} <br>
        📊 Demand: ${data.demand_score}% (${demandText})
      `;
    }

  } catch (err) {
    console.error("AI error:", err);
  }
}


// 🔥 Debounce (avoid too many API calls)
let timeout;
function debounceAISuggestion() {
  clearTimeout(timeout);
  timeout = setTimeout(getAISuggestion, 500);
}


// 🔥 Main DOM Load
document.addEventListener("DOMContentLoaded", () => {

  // ✅ Attach AI listeners
  const areaInput = document.getElementById("property-area");
  const bedroomInput = document.getElementById("property-bedrooms");
  const locationInput = document.getElementById("property-location");

  if (areaInput) areaInput.addEventListener("input", debounceAISuggestion);
  if (bedroomInput) bedroomInput.addEventListener("input", debounceAISuggestion);
  if (locationInput) locationInput.addEventListener("input", debounceAISuggestion);


  // 🔥 FORM SUBMIT (your existing logic)
  const form = document.getElementById("property-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const res = await fetch("https://ghruha.onrender.com/add-property", {
          method: "POST",
          body: formData
        });

        const data = await res.json();

        if (res.ok) {
          alert("✅ Property added successfully!");
          form.reset();

          // Clear AI suggestion
          const resultDiv = document.getElementById("ai-suggestion");
          if (resultDiv) resultDiv.innerHTML = "";

        } else {
          alert("❌ " + (data.error || "Something went wrong"));
        }

      } catch (err) {
        console.error(err);
        alert("❌ Server error");
      }
    });
  }

});