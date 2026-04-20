import { useState,useEffect, use } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import WeatherCard from './components/WeatherCard'
import {getWeather} from './services/wetherService'

export default function App() {
  const [data,setData]=useState({})
  const [loading,setLoading]=useState(false)
  const [err,setErr]=useState(true)
  
  async function getData(city) {
    try{
      setLoading(true)
      setData(await getWeather(city))
    }
    catch(e){
      setErr(true)
      console.log(e.message)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <main>
      <header>
        <h1>Weather-App</h1>
      </header>
      <InputBox 
        getData={getData}
      />
      <WeatherCard
        city={data?data.name:""}
        temp={data&&data.main?data.main.temp:null}
      />
    </main>
  )
}

