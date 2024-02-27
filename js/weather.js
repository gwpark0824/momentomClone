const API_KEY = "c2d7f098746e7bead8e097608d853751";

function onGeoOk(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longtitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((data) => {
        const weatherStatus = document.querySelector("#weather span:first-child");
        const cityName = document.querySelector("#weather span:last-child");
        weatherStatus.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        cityName.innerText = data.name

    })
}
function onGeoFail() {
    alert("location missing");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);