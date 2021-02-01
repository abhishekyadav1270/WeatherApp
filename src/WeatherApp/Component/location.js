import React from 'react';
import styled from "@emotion/styled";
import { FaStreetView } from "react-icons/fa";
import './style.css'
const Container = styled.div`
  text-align: center;
  
`;

const City=styled.h1`
    font-family: Merroweather,sans-serif;
    font-size: 1.6rem;
`;
const Country=styled.h3`
font-family: 'Fira Sans',sans-serif;
font-size: 1.1rem;
`;
const Animate=styled.div`
animation:rotates 3s linear infinite alternate`;

const Location =({city,country,day ,month})=>{
    return (
    <Container>
        <City><Animate><FaStreetView/></Animate>{city}</City>
    <Country>{country}</Country>
    </Container>
    );
}
export default Location;