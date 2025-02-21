import { GithubOutlined } from "@ant-design/icons";
import { InputGroup, Form } from "react-bootstrap";
import axios from 'axios';
import React, { useState } from 'react';
import DisplayData from "./DisplayData";

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [weatherData, setWeatherData] = useState({
        Temp: 'No Data',
        Weather: 'No Data',
        Wind: 'No Data',
        Humidity: 'No Data',
        City: '',
        Country: '',
        Region: '',
        Time: '',
        Lat: 'No Data',
        Lon: 'No Data',
        Pressure: 'No Data',
        UV: 'No Data',
        Visibility: 'No Data',
        Cloud: 'No Data',
        Airquality: ''
    });

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const sendInput = async () => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=6d14733c63a644acb8b115246250902&q=${input}&aqi=yes`);
            setWeatherData({
                Temp: response.data.current.temp_c + '°C',
                Weather: response.data.current.condition.text,
                Wind: response.data.current.wind_kph + ' km/h',
                Humidity: response.data.current.humidity + '%', 
                City: response.data.location.name,
                Country: response.data.location.country,
                Region: response.data.location.region,
                Time: response.data.location.localtime,
                Lat: response.data.location.lat,
                Lon: response.data.location.lon,
                Pressure: response.data.current.pressure_mb + ' mb',
                UV: response.data.current.uv,
                Visibility: response.data.current.vis_km + ' km',
                Cloud: response.data.current.cloud + '%',
                Airquality: response.data.current.air_quality.pm10
            });
        } catch (error) {
            console.log(error);
        }
        console.log(`Searching for: ${input}`);
        console.log(weatherData);
        setInput(''); 
    };


    const formatTime = (time) => {
        const timePart = time.split(' ')[1]; // Remove the unused variable 'date'
        let [hours, minutes] = timePart.split(':');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        return `${hours}:${minutes} ${ampm}`;
    };




    return (
        <>
        <div className="gethub-link" onClick={() => window.open("https://github.com/mazenabaza2005")}>
        <GithubOutlined />
        </div>
        <address className="address"  onClick={() => window.location.href = 'mailto:abazamazen55@gmail.com'}>@2025 M.Abaza</address>
        <div className="header-container">
                <h1 className='WeatherForcast'>Weather</h1>
                <h4 className="Time">Time: {weatherData.Time && formatTime(weatherData.Time)}</h4>
            </div>
            <div>
            <div className="search-bar-container">
                <InputGroup size="lg" className="mb-3"> 
                    <Form.Control className="SearchBar"
                        value={input} // Set the value prop to the input state
                        onChangeCapture={handleInputChange} 
                        placeholder='Search...'
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                
                                sendInput();
                            }
                        }}
                    />
                    <InputGroup.Text id="basic-addon2" onClick={sendInput}>send</InputGroup.Text>
                </InputGroup>
            </div>

            </div>
            <div>
                <DisplayData weatherData={weatherData} />
            </div>
            
        </>
    );
};

export default SearchBar;