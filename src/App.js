import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Switch,HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import Navbar from'./components/Navbar';
import  Shoplist from'./components/Shoplist';
import  Details from'./components/Details';
import  Preflist from'./components/Preflist';
import  Default from'./components/Default';
import Shop from './components/Shop';
import fire from './config/fire';
import Login from './components/Login';
import Home from './components/Home'


class App extends Component {
  constructor(){
    super();
    this.state = ({
      user:null,
    });
    this.authListener=this.authListener.bind(this);
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
console.log(user);
if(user){
  this.setState({user});
  
}else{
  this.setState({user: null});
  
}



    });
  }
  render() {
    return (
      
     /* <React.Fragment>
     <Navbar></Navbar>
     <Switch>
       <Route exact path='/' component={Shoplist}/>
       <Route exact path='/details' component={Details}/>
       <Route exact path='/Preflist' component={Preflist}/>
       
       
       <Route component={Default}/>
     </Switch>
     
     
     </React.Fragment>*/
     <div >
     {this.state.user ?  (<Home/>) : (<Login/>)}
     </div>
    );
  }
}

export default App;
