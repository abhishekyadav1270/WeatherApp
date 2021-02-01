import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isUserValid:true
        }
    }
    
    render() {
       /* if(this.state.isUserValid){
            return <div>Welcome John</div>
        }
        else{
            return <div>Welcome Harry</div>
        }*/

        /*let response
        if(this.state.isUserValid){
            response="welcome abhi"
        }
        else{
            response="welcome abhishek"
        }
        return <div> response</div>*/

       /* return(
            this.state.isUserValid?
            <div>Welcome John</div>:
            <div>Welcome abhishek</div>
        )*/


        //short circuit operator when u have something or nothing
      //  return this.state.isUserValid && <div>Welcome John</div>

      if(this.state.isUserValid){
        return <div>Welcome John</div>
    }
    else{
        return <div>Welcome Harry</div>
    }
       
    }
}
