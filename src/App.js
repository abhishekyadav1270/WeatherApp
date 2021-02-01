import './App.css';
import React,{useState,useEffect} from 'react'
import WeatherCard from './WeatherApp/Component/WeatherCard';

import styled from "@emotion/styled";
import LineChart from './WeatherApp/Component/LineChart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './WeatherApp//Component/Navbar'
const currArray=(posts)=>{
  const currDate=new Date();
  let comparedDate=new Date(
    currDate.setDate(currDate.getDate()-1)
  );
  console.log("commmmmmmm",comparedDate)
  return posts.filter((data)=>{
    const tempDate=new Date(data.dt_txt).getDate();
    
    if(tempDate!==comparedDate){
      comparedDate=tempDate;console.log("tempppppp",tempDate)
      return data;
    }
  })

}
function App() 
{
 const [query,setQuery]=useState("GreenLand")
 const [city,setCity]=useState(" ");
 const [weather,setWeather]=useState([]);
 const [error,setError]=useState(null);
 const [nCards,setnCard]=useState(5);
 const data=async(q)=>{
  const apiRes=await fetch(
   `http://api.openweathermap.org/data/2.5/forecast?q=${q}&units=metric&APPID=6dd5824de93bbdbe3811252c50648aff`
  );
  const resJSON=await apiRes.json();
  
  return resJSON;
}
 useEffect(()=>{
//  fetch(
  //  `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=6dd5824de93bbdbe3811252c50648aff`)
     data(query).then((res)=>
      {
       console.log(res.list)
       const currData=currArray(res.list);
       console.log("I am in useEffect",currData);
       setWeather(currData.slice(0,nCards));
       console.log("nacard",nCards);
       setCity(query);
    })
      .catch((error)=>setError(error))

 },[]);
 if(error){
   console.log("error")
 }

const handleSearch=(e)=>{
  e.preventDefault();
  data(query).then(res=>{
     console.log("hweloooo");
     console.log(res.list)
      const currData=currArray(res.list);
      console.log("I am in handleSearch",currData);

      setWeather(currData.slice(0,nCards));
      setCity(query);
  })
 }
console.log("weather",weather[0]);
const getCurrentDay=(x)=>{

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
return (weekday[x]);

}

const getCurrentMonth=(x)=>{
  var months=[
  "Jan",
   "Feb",
   "Mar",
   "April",
   "May",
   "June",
   "July",
   "Aug",
   "Sept",
   "Oct",
   "Nov",
   "Dec"

  ];
  
  return months[x];
}

 
  
 /*const data=async()=>{
    const apiRes=await fetch(
     `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=6dd5824de93bbdbe3811252c50648aff`
    );
    const resJSON=await apiRes.json();
    
    return resJSON;
  };
  data().then(
    res=>
      {
      console.log(res);
      setPosts(res.data);
      }
      );*/

    
  /*useEffect(() => {
    async function getData(){
      const res=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=6dd5824de93bbdbe3811252c50648aff`)
      console.log("the feel like is "+res.id);
    }
  getData();
  });*/
  
  
          
  //const date = new Date(weather[0].dt_txt);
  //console.log(date);  // Wed Jan 01 2014 13:28:56 GMT-1000 (Hawaiian Standard Time)
  /*
   <form>
         <input value={city} onChange={(e)=>setCity(e.target.value)}/>
           <button onClick={}>Search</button>
        </form>
  */ 
 console.log("nCartdddd",nCards)
  return (
    <>
    <Navbar/>
     <div className="stylecss" >
     <form onSubmit={e=>handleSearch(e)}>
     <div className=" form-row container-fluid">
     
    <div class="col-5">
      <input type="text" class="form-control mt-3" placeholder="City" value={query} onChange={(e)=>setQuery(e.target.value)}/>  
    </div>
     <div className="col-5">
     <select class="custom-select my-1 mr-sm-2 mt-3" id="nCard" value={nCards} onChange={(e)=>setnCard(e.target.value)}>
    <option value="1" >1</option>
    <option value="2" >2</option>
    <option value="3" >3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
     </div>
     <div className="col-2 mt-3">
    <button type="submit"  class="btn btn-primary mb-2">CLick</button>
    </div>
  
  </div>
    </form>
    <div className="container-fluid ">
       <div className="row">
        
         {
       
       weather.map((val,i)=>{
          const d=new Date(val.dt_txt)
          console.log(d.getMonth());
          console.log("Abbbbbbb",d.getHours());
         // console.log(getCurrentDay(d.getDay()));
           return (
             <>
             <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5 py-2 py-sm-0">
               
             <WeatherCard key={i} temp={val.main.temp_min} maxTemp={val.main.temp_max} condition={val.weather[0].main} city={city} country="India" day={getCurrentDay(d.getDay())} month={getCurrentMonth(d.getMonth())}/>
             </div>
             </>
           )  
            
         }

       )
       
       }  
         
        </div>
    </div>
       
    </div>
    <div className="row">
    
      </div>
    </>
  )
}
export default App;



/*</div> <div className="styleApp">
     
     {
       
       weather.map((val,i)=>{
          const d=new Date(val.dt_txt)
          console.log(d.getMonth());
         // console.log(getCurrentDay(d.getDay()));
           return  <WeatherCard key={i} temp={val.main.temp_min} maxTemp={val.main.temp_max} condition={val.weather[0].main} city={city} country="India" day={getCurrentDay(d.getDay())} month={getCurrentMonth(d.getMonth())}/>
            
         }

       )
       
       }  
   </div>*/







































































/*import {Greet} from './components/Greet';
import { User } from './components/User';
import PropsDemo from './components/PropsDemo';
import PropsDemo2 from './components/PropsDemo2';
import StateDemo1 from './components/StateDemo1';
import StateDemo2 from './components/StateDemo2';
import EventHandlingDemo from './components/EventHandlingDemo';
import ConditionalRendering from './components/ConditionalRendering';
import Information from './components/Information'*/
//function App() {
 /* const [uname,setUname]=useState('Abhishek');
  const changeName=(name)=>{
    setUname('Abhishekkkkkkk')
  }*/
  //return (
   /* <div className="App">
      Welcome to react js
      <Greet/>
      <User/>
      <PropsDemo uname="Abhishek" address="Lucknow">
        This is React Component
      </PropsDemo>
      <PropsDemo>
      </PropsDemo>
      <PropsDemo2 uname="Abhishek">
      </PropsDemo2>
      <PropsDemo2>
      </PropsDemo2>
      <StateDemo1/>
      <StateDemo2/>
    <EventHandlingDemo/>
    <ConditionalRendering/>
 
    </div>
    //   <Information handleChangeName={(val)=>changeName(val)}/>
    */
/*    <div className="App">
      <Card/>
    </div>
  );
}

export default App;
*/