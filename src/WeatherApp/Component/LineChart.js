import React from 'react'
import {Line} from 'react-chartjs-2'
import styled from "@emotion/styled";
const LineChart=(props)=>
 {
    
    console.log("line",props.data[0].main.temp_min);
    const maxTemp=[];
     const minTemp=[];
     const date=[];
     
   for(let i=0;i<5;i++){
         maxTemp.push(props.data[i].main.temp_min);
         minTemp.push(props.data[i].main.temp_max);
         date.push(props.data[i].dt_txt);
     }
     console.log("maxTemp",maxTemp);
    console.log("minTemp",minTemp);
     const data={
         labels:date,
         datasets:[
           { label:'Temp',
           data:maxTemp
           }
         ]
     }
const LineChart=styled.div`
    width:80%;
`;
    return (
        <   LineChart>
            <Line data={data}/>
        </LineChart>
    )
} 
export default LineChart;