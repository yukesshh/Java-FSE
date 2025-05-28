function showConfirmation(event) {
  event.preventDefault();
  document.getElementById("confirmation").textContent = "Thank you for registering!";
}

function validatePhone(input) {
  const pattern = /^[0-9]{10}$/;
  if (!pattern.test(input.value)) {
    alert("Please enter a valid 10-digit phone number.");
  }
}

function countCharacters() {
  const text = document.getElementById("feedback").value;
  document.getElementById("charCount").textContent = text.length;
}

function toggleZoom(img) {
  img.classList.toggle("enlarged");
}

function videoReady() {
  document.getElementById("videoStatus").textContent = "Video ready to play";
}

function showFee(type) {
  const feeDisplay = document.getElementById("feeDisplay");
  const fees = {
    picnic: "$10",
    workshop: "$20",
    meeting: "Free"
  };
  feeDisplay.textContent = type ? "Event Fee: " + (fees[type] || "N/A") : "";
}

window.onbeforeunload = function () {
  const formFilled = document.querySelector("form").checkValidity();
  if (!formFilled) {
    return "You have unsaved changes. Are you sure you want to leave?";
  }
};

function savePreference() {
  const eventType = document.getElementById("eventType").value;
  localStorage.setItem("preferredEvent", eventType);
}

function clearPreferences() {
  localStorage.clear();
  sessionStorage.clear();
  alert("Preferences cleared.");
}

window.onload = function () {
  const saved = localStorage.getItem("preferredEvent");
  if (saved) {
    document.getElementById("eventType").value = saved;
    showFee(saved);
  }
};

function findLocation() {
  const output = document.getElementById("locationOutput");

  if (!navigator.geolocation) {
    output.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      output.textContent = Your location: Latitude ${lat}, Longitude ${lon};
    },
    (error) => {
      output.textContent = Error getting location: ${error.message};
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
};
