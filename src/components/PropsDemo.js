import React from 'react'
//props is not a keytword it is just a parameter
export default function PropsDemo(props) {
    return (
        <div>
            Hello, {props.uname}, your address is {props.address}
            <br/>
            {props.children}
            
        </div>
    )
    //props.children is a predefined property  that fetch element from parent component
}

PropsDemo.defaultProps={
    uname:"abhi",
    address:"lucknow"
}