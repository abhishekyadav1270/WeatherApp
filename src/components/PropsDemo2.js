import React, { Component } from 'react'

export default class PropsDemo2 extends Component {
    render() {
        return (
            <div>
               Hello  {this.props.uname} from PropsDemo2
            </div>
        )
    }
}


PropsDemo2.defaultProps={
    uname:"abhi",
    address:"lucknow"
}