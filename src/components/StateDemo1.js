import React, { Component } from 'react'

export default class StateDemo1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
             userName:"Abhishek"
        }
    }
    modifyUserName=()=>{
        console.log("method invoked")
        this.setState({
            userName:"abhi"
        })
        
    }
    render()
     {
        return (
            <div>
                Hello,{this.state.userName}
                <button onClick={this.modifyUserName}> Modify UserName </button>
            </div>
        )
    }
}
