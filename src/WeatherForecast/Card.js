import React, { Component } from 'react'
import CardUI from './CardUI'
export default class Card extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <CardUI/>
                    </div>
                    <div className="col-md-4">
                        <CardUI/>
                    </div>
                    <div className="col-md-4">
                        <CardUI/>
                    </div>
                </div>
            </div>
        )
    }
}
