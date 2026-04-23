import {useState} from 'react'
export default function InputBox({getData}){

    const [city,setCity]=useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        if(city==='')   return;
        await getData(city)
        setCity("")
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" id='city' placeholder='Enter city name' value={city} onChange={(e)=>setCity(e.target.value)} />
                <button>Get</button>
            </div>
        </form>
    );
}