export default function WeatherCard({city}){

    return (
        <section>
            <hr />
            <h1>-:current weather:-</h1>
            {city&&<div>
                <p>City : {city}</p>
                <p>Temp : 38 C </p>
                <p>Feels Like : 40 C </p>
                <p>Humidity : 89%</p> 
                <p>Condition : sunny </p>
            </div>}
            <hr />
        </section>
    );
}