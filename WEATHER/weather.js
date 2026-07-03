// let url =
//   "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";

let apikey = "5df05e7e07eccd68457fd1981ea73bf4";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let btn = document
  .querySelector("button")
  .addEventListener("click", async () => {
    let city = document.querySelector("#city").value;
    let wed = await weather(city);
    console.log(wed);
    let h1 = document.querySelector("#temp");
    h1.innerText = wed + "°C";
  });

async function weather(city) {
  try {
    let res = await fetch(apiurl + `&appid=${apikey}` + `&q=${city}`);
    let data = await res.json();
    return data.main.temp;
  } catch (err) {
    console.log("error-->", err);
    return "NO weather";
  }
}
