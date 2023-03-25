const getLocationBtn = document.getElementById("getLocationBtn");
const removeLocationBtn = document.getElementById("removeLocationBtn");
const mapDiv = document.getElementById("map");

const lat = localStorage.getItem("lat");
const long = localStorage.getItem("long");

if (lat && long) {
  getLocationBtn.disabled = true;
  const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
  mapDiv.innerHTML = `<iframe width="600" height="450" frameborder="0" style="border:0" src="${mapUrl}" allowfullscreen></iframe>`;
}

getLocationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

removeLocationBtn.addEventListener("click", () => {
  localStorage.removeItem("lat");
  localStorage.removeItem("long");
  getLocationBtn.disabled = false;
  mapDiv.innerHTML = "";
});

function showPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  localStorage.setItem("lat", lat);
  localStorage.setItem("long", long);
  getLocationBtn.disabled = true;
  const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
  mapDiv.innerHTML = `<iframe width="600" height="450" frameborder="0" style="border:0" src="${mapUrl}" allowfullscreen></iframe>`;
}