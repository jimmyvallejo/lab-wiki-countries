import './App.css';
import countries from "./countries.json"
import { Routes, Route } from "react-router-dom"
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [foundCountries, setCountries] = useState(null);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
        console.log("Response",response.data);
      })
      .catch((err) => {
        console.log(err)
      })
    
  }, []);



  return (
    <div className="App">
     
        <Navbar />
        <div className="container">

          <div className="row">

              <CountriesList countries={foundCountries}  />
            
              <Routes>
              
                <Route path="/:id" element={<CountryDetails  countries={foundCountries} />} />
              </Routes>

          </div>
      </div>
      </div>
    
   
  );
}

export default App;