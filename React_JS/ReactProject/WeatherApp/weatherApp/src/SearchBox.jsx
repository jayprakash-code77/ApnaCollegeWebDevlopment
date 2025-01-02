import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";  // ?q={city name}&appid={API key}
    const API_KEY = "75087ee815c3e03537bd9d5e6063637f";

    let getWeatherInfo = async ({updateInfo}) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);S
        let result = {
            city: city,
            feels_like: jsonResponse.main.feels_like,
            temperature:  jsonResponse.main.temp,
            grnd_level: jsonResponse.main.grnd_level,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            sea_level: jsonResponse.main.sea_level,
            weather: jsonResponse.weather[0].description,            
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min
        }
        console.log(result);
        return result;

    }





    let handleChange = (evt) => {
        setCity(evt.target.value);
    }


    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }


    return (

        <>
            <div className='mainBox' >
                <h3>Search for Weather</h3>
                <form action="" onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="City Name" value={city} variant="outlined" required onChange={handleChange} />
                    <br /><br /><br />
                    <Button variant="contained" type='submit' >Search</Button>
                </form>
            </div>
        </>
    );
}







// export default function SearchBox() {
//     const [city, setCity] = useState("");
//     const [weatherData, setWeatherData] = useState(null);

//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "75087ee815c3e03537bd9d5e6063637f";

//     const getWeatherInfo = async () => {
//         try {
//             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//             if (!response.ok) {
//                 throw new Error(`City not found: ${city}`);
//             }
//             let jsonResponse = await response.json();
//             let result = {
//                 feels_like: jsonResponse.main.feels_like,
//                 temperature: jsonResponse.main.temp,
//                 grnd_level: jsonResponse.main.grnd_level,
//                 humidity: jsonResponse.main.humidity,
//                 pressure: jsonResponse.main.pressure,
//                 sea_level: jsonResponse.main.sea_level,
//                 weather: jsonResponse.weather[0].description,
//                 temp_max: jsonResponse.main.temp_max,
//                 temp_min: jsonResponse.main.temp_min
//             };
//             setWeatherData(result);
//         } catch (error) {
//             console.error(error.message);
//             setWeatherData(null);
//         }
//     };

//     const handleChange = (evt) => {
//         setCity(evt.target.value);
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         getWeatherInfo();
//         setCity("");
//     };

//     return (
//         <>
//             <div className="mainBox">
//                 <h3>Search for Weather</h3>
//                 <form onSubmit={handleSubmit}>
//                     <TextField
//                         id="outlined-basic"
//                         label="City Name"
//                         value={city}
//                         variant="outlined"
//                         required
//                         onChange={handleChange}
//                     />
//                     <br /><br /><br />
//                     <Button variant="contained" type="submit">Search</Button>
//                 </form>
//             </div>
//             <WeatherInfo weatherData={weatherData} />
//         </>
//     );
// }