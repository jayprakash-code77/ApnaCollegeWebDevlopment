import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// import './weatherInfi.css'

// WeatherInfo Component
function WeatherInfo({data}) {

    return (
        <div className='cardClassContainer'>
            <Card className='cardClass'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="../public/Haze.jpeg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature: {data.temperature}°C<br />
                            Feels Like: {data.feels_like}°C<br />
                            Humidity: {data.humidity}%<br />
                            Weather: {data.weather}<br />
                            Pressure: {data.pressure} hPa<br />
                            Sea Level: {data.sea_level} hPa<br />
                            Ground Level: {data.grnd_level} hPa<br />
                            Max Temp: {data.temp_max}°C<br />
                            Min Temp: {data.temp_min}°C
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    );
}


export default WeatherInfo;

/*
    const data = {
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




<div>
            {data ? (
                <>
                    <p>Temperature: {data.temperature}°C</p>
                    <p>Feels Like: {data.feels_like}°C</p>
                    <p>Humidity: {data.humidity}%</p>
                    <p>Weather: {data.weather}</p>
                    <p>Pressure: {data.pressure} hPa</p>
                    <p>Sea Level: {data.sea_level} hPa</p>
                    <p>Ground Level: {data.grnd_level} hPa</p>
                    <p>Max Temp: {data.temp_max}°C</p>
                    <p>Min Temp: {data.temp_min}°C</p>
                </>
            ) : (
                <p>No weather data available. Search for a city to get started.</p>
            )}
        </div> */