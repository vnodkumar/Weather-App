import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  return (
    <main>
      <header>
        <h1>Weather-App</h1>
      </header>
      <form action="">
        <div>
          <input type="text" id='city' placeholder='Enter city name'  />
          <button>Get</button>
        </div>
      </form>
      <section>
        loading...
      </section>
    </main>
  )
}

