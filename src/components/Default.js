import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className ="container">
      <div className="row">
      <div className=" col-10 mx-auto text-center text-title text-uppecase pt-5">
      
      <h1 className="display-3"> 404 </h1>
      <h1> ERROR</h1>
      <h2>PAGE NOT FOUND</h2>
      <h3>the requested URL <span className="text-danger" > { this.props.location.pathname}</span>{"  "}is not Found</h3>
      
      </div>
      
      
      
      </div>
        
      </div>
    )
  }
}
