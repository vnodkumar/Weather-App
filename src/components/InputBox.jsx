import {useState} from 'react'
export default function InputBox({city,setCity}){
    
    
    return(
        <form action="">
            <div>
                <input type="text" id='city' placeholder='Enter city name' value={city} onChange={(e)=>setCity(e.target.value)} />
                <button>Get</button>
            </div>
        </form>
    );
}