const API_URL = "http://localhost:5000/api/properties";
const form = document.getElementById("propertyForm");
const listContainer = document.getElementById("propertyList");

async function fetchProperties() {
  const res = await fetch(API_URL);
  const properties = await res.json();

  listContainer.innerHTML = properties.map((p) => `
    <div class="col-md-4">
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text"><strong>Location:</strong> ${p.location}</p>
          <p class="card-text"><strong>Price:</strong> ₹${p.price}</p>
          <button class="btn btn-danger btn-sm" onclick="deleteProperty('${p._id}')">Delete</button>
        </div>
      </div>
    </div>
  `).join("");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newProperty = {
    title: document.getElementById("title").value,
    location: document.getElementById("location").value,
    price: document.getElementById("price").value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProperty),
  });

  form.reset();
  fetchProperties();
});

async function deleteProperty(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchProperties();
}

// Load properties on page load
fetchProperties();
