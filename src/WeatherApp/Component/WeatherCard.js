import React from 'react'
import './style.css'
import styled from "@emotion/styled";
import Location from "./location";
import Icon from './icon'
import Condition from './condition'
import Time from './Time'
const WeatherCard=({temp,maxTemp,condition,city,country,day,month})=>{

  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) 
  {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 180;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${Math.abs(lowColor)}, 0)
    )`;
  } 
  else if (temp<= 12)
   {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 180;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${Math.abs(lowColor)}, 255)
    )`;
  }
  
const Card = styled.div`
margin-top:3rem;
background: ${bg};
width:200px;
height: 250x;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;  
color:whitesmoke;
border-radius: 15px;

`;

    return (
      /*
      <div className="container">
        <div className="card">
          <div className="Imgbx">
          <Card>
              <Icon condition={condition}/>
             <Location city={city} country={country} day={day} month={month} />
             
          </Card>
          </div>
          <div className="context">
            
             <Condition minTemp={temp} maxTemp={maxTemp} condition={condition}/>
             
          </div>
        </div>
      </div>
      */
    /*  
      <Card>
      <Icon condition={condition}/>
      <Location city={city} country={country} day={day} month={month} />
      <Condition minTemp={temp} maxTemp={maxTemp} condition={condition} />
      </Card>
      */
     
            <div className="flip-card">
                <div className="flip-card-inner">
                     <Card className="flip-card-front">
                          <Icon condition={condition}/>
                          <Location city={city} country={country} />
                           <Time day={day} month={month}/>
                      </Card>
                  
            <Card className="flip-card-back">
            
            <Icon condition={condition}/>
            <Condition minTemp={temp} maxTemp={maxTemp} condition={condition}/>
            
            </Card>
            </div>
            </div>
            
          
        

    );
}
export default WeatherCard;


