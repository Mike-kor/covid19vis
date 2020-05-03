import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import CountrySelector from './components/CountrySelector';
import {useSelector} from "react-redux";
import {RootState} from "./reducers";
import WorldMap from "./components/WorldMap";
import CountryCoronaInfo from "./components/CountryCoronaInfo";
import Layout from "./components/Layout";


function App() {
    const info: any = useSelector((state: RootState) => state.corona.info)
    const [infoTable, setInfoTable] = useState();

    useEffect(() => {
        console.log(info);
        let tab = '';
        for (let key in info) {
            tab += `${key}  : ${info[key]} \r\n`;
        }
        // 일단 안씀 보관만하고
        setInfoTable(tab);

    }, info);

    return (
        <div className="App">
            <header className="App-header">

                <span> 확인하고 싶은 나라를 선택하시오 </span>
                <CountrySelector></CountrySelector>
                {info && (
                    <div>
                        <img src={info.countryInfo.flag} alt="logo"/>

                        <div>{info.country}</div>
                        <div>{info.continent}</div>

                        <div>총확진자 수 : {info.cases}</div>
                        <div>금일 확진 : {info.todayCases}</div>
                        <div>금일 사망 : {info.todayDeaths}</div>
                        <div>치유 된 수 : {info.recovered}</div>
                        <div>사망 자 수 : {info.deaths}</div>

                        <div></div>
                        <div>업데이트 시간 : {new Date(info.updated).toLocaleDateString()} {new Date(info.updated).toLocaleTimeString()}</div>


                    </div>
                )}

            </header>
        </div>
    );
}

export default App;
