import {  useState } from "react";
export default function WeatherCard({city,data}){
    const [unit,setUnit]=useState('C')
    
    if(!city||!data) return null
    console.log(unit)
    function celToFah(t){
        return Math.round(t*9/5+32)
    }
    const temp=unit==='C'?Math.round(data?.main?.temp):celToFah(data?.main?.temp)
    const realFeel=unit==='C'?Math.round(data?.main?.feels_like):celToFah(data?.main?.feels_like)
    return (
        <section>
            <div>

            <h1>-:current weather:-</h1>
                <p>City : {city}</p>
                <p>Temp : {temp}<sup>o</sup> </p>
                <p>Real feel : {realFeel}<sup>o</sup></p>
                <p>Humidity : {data?.main?.humidity}%</p> 
                <p>Clouds : {data?.weather[0]?.description} </p>
            </div>
            <div id='cf'>
                <button id='celsius' onClick={()=>setUnit('C')}  style={{backgroundColor:unit==='C'?'white':'transparent'}}><sup>o</sup>C</button>
                <button id='fahrenheit' onClick={()=>setUnit('F')}  style={{backgroundColor:unit==='F'?'white':'transparent'}}><sup>o</sup>F</button>
            </div>
        </section>
    );
}