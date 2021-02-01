import React, { Component } from 'react'

export default class EventHandlingDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"aaaaa"
        }
        //this.eventHandler=this.eventHandler.bind(this);
        //we r binding in constructor instead under render method as 
        //render method call repeated and constructor get called once 
        
    }
    //using bind 
    eventHandler(){
        console.log("Button Clicked");
    
        this.setState({
            uname:"abhi"
        })
    }


    //using flat arrow function 
    handleClick=()=>{
        console.log("Button Clicked");
    
        this.setState({
            uname:"abhi"
        })

    }
    render() {
        return (
            <div>
                {this.state.uname}
               <button onClick={this.eventHandler.bind(this)}>Click</button>
               <button onClick={()=>this.eventHandler()}>click me</button>
               <button onClick={this.handleClick}>Click me again</button>

            </div>
        )
    }
}
