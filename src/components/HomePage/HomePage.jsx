import React, { useState } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import LocationSearch from '../LocationSearch/LocationSearch';

export default function HomePage(){
   const [location, setLocation] = useState({
      "id": 727012,
      "name": "Sofia",
      "state": "",
      "country": "BG",
      "coord": {
          "lon": 23.633329,
          "lat": 42.650002
      }
  });
   const[hasResult, setHasResult] = useState(true);
   
   const onResult = (data) => {
      
      if(data.error){
         setHasResult(false)
      }else{
         setLocation(data);
         setHasResult(true)
      }
    }
   return (<div data-testid="HomePage">
      <div className='app-header'>
         <div className='search-bar'>Weather
        <LocationSearch onResult={onResult}></LocationSearch></div>
      </div>
      
      {hasResult?<CurrentWeather location={location}></CurrentWeather>:<div>No result found for{location.location}</div>}
   </div>)
}



