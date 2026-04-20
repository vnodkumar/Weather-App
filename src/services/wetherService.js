import axios from "axios";

export async function getWeather(city='btm layout'){
    const API_KEY=import.meta.env.VITE_API_KEY;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res= await axios.get(url);
    return res.data
}