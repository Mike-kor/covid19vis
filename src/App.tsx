import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import CountrySelector from './components/CountrySelector';
import {useSelector} from "react-redux";
import {RootState} from "./reducers";

function App() {
  const info : any = useSelector((state:RootState) => state.corona.info)
  useEffect(() => {
    console.log('app effect [] ')
    console.log(info);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={info ? info.countryInfo.flag : logo} className="App-logo" alt="logo" />
        {info && info.country}
        <CountrySelector></CountrySelector>
      </header>
    </div>
  );
}

export default App;
