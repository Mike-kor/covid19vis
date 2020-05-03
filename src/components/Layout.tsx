import logo from "../logo.svg";
import React, {ReactNode} from "react";
import styled from "styled-components"

interface LayoutProps {
  info: any;
  children? : ReactNode
}

const Layout : React.FC<LayoutProps> = ({info}) => {
  return (
      <header className="App-header">
        <img
          src={info ? info.countryInfo.flag : logo}
          className="App-logo"
          alt="logo"
        />
        {info && info.country}
        {info && info.cases}
      </header>
  )
};

export default  Layout;


const BodyWrapper = styled.div`
 display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;