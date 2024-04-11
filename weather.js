async function fetchData(city){
    const API_KEY = "6f4daa0f30fc3fa41edf1fdefec025b7"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    
    const res = await fetch(url);
    const data = await res.json();
    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp-273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 
}


document.querySelector(".searchButton").addEventListener("click",()=>{
    const city = document.querySelector(".inputCity").value
    // console.log(city)
fetchData(city)
})
