import React, { useState,useRef } from "react";
import "./App.css";
import "./index.css";
import AirportChooser from "./airportChooser/AirportChooser";
import Details from './airportChooser/Details';
 


function App() {
  const [selectedAirport, setSelectedAirport] = useState(false);
  const [data, setData] = useState([]);
  const loader = useRef(null);

  function onAirportSelection(airport) {
    setSelectedAirport(airport);
  }

  const closeModal = () => setSelectedAirport(false)

  const getData = () => {
    loader.current.style.display = "block";
    fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
    .catch(function (error) {
      console.log('Request failed', error);
    })
    .then(response => response.json())
    .then(data => {
      loader.current.style.display = "none";
      setData(data);
    });
  }

  
  return (
    <div className="App">
      <div className="container">
       <button className="button" onClick={getData}><span>Airport Chooser </span></button>
       <p  ref={loader}  className="loader">Loading...</p> 
       {data && data.length > 0 && 
          <AirportChooser
          data={data}
          onAirportSelection={onAirportSelection}
        ></AirportChooser>
       } 
      </div>
     {selectedAirport && <Details airportDetails={selectedAirport} closeModal={closeModal}/>} 
    </div>
  );
}

export default App;
