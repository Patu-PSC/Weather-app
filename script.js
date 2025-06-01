function getWeather() {
  const city = document.getElementById("cityInput").value.trim().toLowerCase();
  const citySpan = document.getElementById("cityName");
  const tempSpan = document.getElementById("temperature");
  const condSpan = document.getElementById("condition");
  const humSpan = document.getElementById("humidity");
  const windSpan = document.getElementById("wind");

  const sampleData = {
    temperature: "31",
    condition: "Sunny",
    humidity: "45",
    windSpeed: "15"
  };

  if (city) {
    // Show any city with same data
    citySpan.textContent = city.charAt(0).toUpperCase() + city.slice(1);
    tempSpan.textContent = sampleData.temperature;
    condSpan.textContent = sampleData.condition;
    humSpan.textContent = sampleData.humidity;
    windSpan.textContent = sampleData.windSpeed;
  } else {
    alert("Please enter a city name.");
  }
}