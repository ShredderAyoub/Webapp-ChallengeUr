import React, { Component } from 'react';
import fire from '../config/fire';
import ReactDom from 'react-dom';
import {Switch,HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import Navbar from'./Navbar';
import  Shoplist from'./Shoplist';
import  Details from'./Details';
import  Preflist from'./Preflist';
import  Default from'./Default';
import Shop from './Shop';
import Login from './Login';
import { ButtonContainer } from './Button';


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <React.Fragment>
     <Navbar></Navbar>
     <Switch>
       <Route exact path='/' component={Shoplist}/>
       <Route exact path='/details' component={Details}/>
       <Route exact path='/Preflist' component={Preflist}/>
       
       
       <Route component={Default}/>
     </Switch>
     <ButtonContainer onClick={this.logout}> log out</ButtonContainer>
     
     </React.Fragment>

            );

    }

}

export default Home;
