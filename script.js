
let fetchloli= document.getElementById("fetch-btn");
let long = document.getElementById("long");
let lati = document.getElementById("lati");


fetchloli.addEventListener("click", ()=>{

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
})

function showPosition(position) {
    let cod = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }

    console.log(cod);
    let iframe = document.getElementById("iframe");
    iframe.src = `https://maps.google.com/maps?q=${cod.latitude},${cod.longitude}&hl=es;z=14&output=embed`;
    document.getElementById("lati").innerText = `Lat: ${cod.latitude}`;
    document.getElementById("long").innerText = `Long: ${cod.longitude}`;
    
    document.getElementById("long-lati").style.display = "flex";

    fetchloli.style.display = "none";

   
    let url="didntgetfreeapi";
    fetchWeatherDetails(url);

}

function fetchWeatherDetails(){
   console.log("working");
   document.getElementById("weather-container").style.display="flex";

}
