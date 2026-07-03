const input = document.querySelector("input")
const ApiKey = '23d058313b115ce1478985d524f25603'
const temp1 = document.querySelector("#temp")
const inpval = document.querySelector("#inpval")
const feel = document.querySelector("#feel")
const humi = document.querySelector("#humi")
const wind = document.querySelector("#wind")

const weatherApi = async () => {
    const city = input.value
    // inpval.innerHTML = `📍${input.value}`

    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`)
        const data = await resp.json()
        temp1.innerHTML = `${data.main.temp}°`
        feel.innerHTML = `Feels like ${data.main.feels_like}°C Very Hot`
        humi.innerHTML = `${data.main.humidity} %`
        wind.innerHTML = `${data.wind.speed} km/h`
        inpval.innerHTML = `📍${data.name}`

        console.log(data);
    } catch (error) {
        alert(error);
    }
    input.value = ""
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        weatherApi()
    }

})