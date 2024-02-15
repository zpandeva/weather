import React, { useEffect, useState } from 'react';

export default function CurrentWeather(){
    const [temp, setTemp] = useState(1);
    const [icon, setIcon] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
      
        
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric', {
         
        }).then((response) => response.json()).then((jsonData) => {
            setTemp(jsonData.main.temp);
            console.log(jsonData)
            const iconUrl = `https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`
            setIcon(iconUrl);
            setDescription(jsonData.weather[0].description)
        });
      }, [temp]);
   return (<div>Current wether in London {temp}°<img src={icon}></img> <span>{description}</span></div>)
}



