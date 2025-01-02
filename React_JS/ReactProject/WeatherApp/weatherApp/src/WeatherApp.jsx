import WeatherInfo from "./weatherInfo";
import SearchBox from "./SearchBox";
import './weatherApp.css'
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState(
        {
            "city": "Keral",
            "temperature": 25,
            "feels_like": 27,
            "humidity": 70,
            "weather": "Clear sky",
            "pressure": 1013,
            "sea_level": 1016,
            "grnd_level": 1005,
            "temp_max": 30,
            "temp_min": 20
        }        
    )

    let updateInfo= (result) => {
        setWeatherInfo(result);
    }

    return (
        <>
            <div className="appContainer" style={{ textAlign: "center", marginTop:20 }}>
                <div className="cardClass">
                    <SearchBox updateInfo={updateInfo}/>
                    <WeatherInfo data={weatherInfo}/>
                </div>
            </div>


        </>

    );
}
