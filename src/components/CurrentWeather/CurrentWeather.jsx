import React, { useEffect, useState } from 'react';

export default function CurrentWeather({location}){
    const [temp, setTemp] = useState(1);
    const [icon, setIcon] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
      
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coord.lat}&lon=${location.coord.lon}&units=metric&appid=bcadc6db6817e68e578d62e4015c68a7`, {
         
        }).then((response) => response.json()).then((jsonData) => {
            setTemp(jsonData.main.temp);
            console.log(jsonData)
            const iconUrl = `https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`
            setIcon(iconUrl);
            setDescription(jsonData.weather[0].description)
        });
      }, [temp,location.coord.lat, location.coord.lon]);
   return (<div data-testid="CurrentWeather">Current wether in {location.name} {temp}°<img src={icon}></img> <span>{description}</span></div>)
}



