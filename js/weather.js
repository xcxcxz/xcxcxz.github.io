const APIkey = "86b56ef76a8b67faa6970ef206fbe2d8"

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIkey}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없습니다.");

}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);