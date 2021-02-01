import React from 'react'
import styled from "@emotion/styled";
const Day=styled.h3`
font-family: 'Fira Sans',sans-serif;
font-size: 1.1rem;
`;
const month=styled.h3`
font-family: 'Fira Sans',sans-serif;
font-size: 1.1rem;
`;
const Time =({day,month})=>{
    return (
       <>
        <p>{day}  | {month}</p>
         
       
       </>
    );
}
export default Time;