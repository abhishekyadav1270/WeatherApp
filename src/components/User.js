import React,{Component} from 'react';
//uses Class Component 
export class User extends Component{
    render(){
        return (
            // React.createElement("div",{id:"div1"},React.createElement("h1",{id:"myh1"},"Hello World"))//pure react way to use html tag without using jsx
         //below is jsx way of viewing the code
         <div id="div1">
                <h1 id="myh1">
                    Hello World
                </h1>    
            </div>
         )
        
    }
}
