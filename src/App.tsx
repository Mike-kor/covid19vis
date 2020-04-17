import React, {useEffect} from "react";
import './App.css';
import CountrySelector from './components/CountrySelector';
import {useSelector} from "react-redux";
import {RootState} from "./reducers";
import WorldMap from "./components/WorldMap";
import CountryCoronaInfo from "./components/CountryCoronaInfo";
import Layout from "./components/Layout";

function App() {
  const info : any = useSelector((state:RootState) => state.corona.info)

  useEffect(() => {
    console.log('app effect [] ')
    console.log(info);
  }, []);

  return (
    <div className="App">
      <Layout info = {info} />
      <CountryCoronaInfo info = {info} ></CountryCoronaInfo>
      <CountrySelector></CountrySelector>
      <WorldMap></WorldMap>
    </div>
  );
}

export default App;
