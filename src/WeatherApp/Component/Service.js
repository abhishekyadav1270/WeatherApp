import React from 'react'
const currArray=(posts)=>{
    const currDate=new Date();
    let comparedDate=new Date(
      currDate.setDate(currDate.getDate()-1)
    );
    return posts.filter((data)=>{
      const tempDate=new Date(data.dt_txt).getDate();
      if(tempDate!==comparedDate){
        comparedDate=tempDate;
        return data;
      }
    })
  
  }
function Service() {
    const [city,setcity]=useState("Greenland");
 const [weather,setWeather]=useState([]);
 const [posts,setPosts]=useState([]);
 const [error,setError]=useState(null);
 useEffect(()=>{
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=6dd5824de93bbdbe3811252c50648aff`)
     .then((j)=>j.json())
     .then((data)=>
      {
       console.log(data.list)
       setPosts(data.list)
    
       const currData=currArray(data.list);
      
        console.log("current",currData);
        setWeather(currData);
    })
      .catch((error)=>setError(error))

 },[]);
 if(error){
   console.log("error")
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
   "oct",
   "nov",
   "dec"

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
    return
     (
        <div>
            
        </div>
    )
}

export default Service;