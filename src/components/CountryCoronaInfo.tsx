import React, {useEffect} from "react";
import styled from "styled-components";
import Moment from "react-moment";

interface coronaInfo {
    info : any,
}

const CountryCoronaInfo : React.FC<coronaInfo> = ({info}) => {
    useEffect(()=>{}, []);

    const infotxt = info ? JSON.stringify(info) : '';

    return (
        <div>
            <InfoTable>
                {infotxt}
            </InfoTable>
        </div>
    );
}

export default CountryCoronaInfo;

const InfoTable = styled.div`
    
`;