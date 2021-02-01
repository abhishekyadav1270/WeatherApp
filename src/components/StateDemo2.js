import React,{useState} from 'react'

export default function StateDemo2() {
    const [uname,setUserName]=useState('Abhishek')
    return (
        <div>
            hello {uname}
            <button onClick={()=>setUserName("abhishekkk")}> Modify UserName </button>
        </div>
    )
}
