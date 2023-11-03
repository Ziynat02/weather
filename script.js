
let temp = document.querySelector("#currentIdLocation");
let name = document.querySelector("#locationName");
let weatherIcon = document.querySelector("#weahterIcon");
let dataTime = document.querySelector("#dataTime");
let maxTemp = document.querySelector("#maxTemp");
let minTemp = document.querySelector("#minTemp");
let humadity = document.querySelector("#humadity");
let wind = document.querySelector("#wind");
let weatherIconMin = document.querySelector("#weatherIconMin");
let cloud = document.querySelector("#cloud");
function getData(address) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${address}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "49ffa17bfcmshc128bf5bd21722bp1a1389jsn358cb34149e1",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((el) => el.json())
    .then((data) => {
      changeui(data);
    });
}

function changeui(data) {
  console.log(data);
  console.log(weatherIcon);
  name.textContent = data.location.name;
  temp.textContent = data.current.temp_c + "°";
  weatherIcon.setAttribute("src",data.current.condition.icon);
  dataTime.textContent = data.current.last_updated;
  maxTemp.textContent = data.current.temp_f + "°"
  minTemp.textContent = data.current.temp_c+"°";
  humadity.textContent = data.current.humidity+"%";
  wind.textContent = data.current.wind_kph+"km/h";
  weatherIconMin.setAttribute("src",data.current.condition.icon);
  cloud.textContent = data.current.cloud+"%";
}
////////////////////////////////////////////////////
let input = document.querySelector("#searchInput");
input.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    getData(input.value);
  }
  console.log(event.key);
});
