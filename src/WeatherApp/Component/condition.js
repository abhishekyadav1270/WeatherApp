import React from 'react'
import styled from "@emotion/styled";
import { FaTemperatureLow } from "react-icons/fa";
import {FaTemperatureHigh} from "react-icons/fa";
const Temp_min=styled.h1`
font-family: 'Fira Sans',sans-serif;
    font-size: 1.4rem;
    font-weight: 200;
`
const Temp_max=styled.h1`
font-family: 'Fira Sans',sans-serif;
    font-size: 1.4rem;
    font-weight: 200;
`

const State=styled.h3` font-family: Merroweather,sans-serif;
font-size: 1.2rem;
`;
const Condition =({minTemp,maxTemp,condition})=>{
    return (
       <>
         <Temp_min><FaTemperatureLow/>{minTemp}'C </Temp_min>
         <Temp_max><FaTemperatureHigh/>{maxTemp}'C </Temp_max>
         <State>{condition}</State>
       </>
    );
}

export default Condition;
