import React,{ Component } from 'react'
import{Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import nav from 'react-bootstrap/Navbar'




export default class Navbar  extends Component{
    
    render(){
        return(
    
          <Navwrapper className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
          { /* 
        https://www.iconfinder.com/icons/4177575/sale_shop_store_icon
        Creative Commons (Attribution 3.0 Unported);
             https://www.iconfinder.com/joalfa */}
        
                <Link to = '/' >
                <img src={logo} alt="store" className="navbar-brand" ></img>
                </Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">

            <Link to="/" className="nav-link">NearShops</Link>
            </li>
            </ul>
            <Link to="/preflist" className="ml-auto">
            <ButtonContainer>
            <span> <i className="far fa-heart"></i> PreferredShops </span>
            </ButtonContainer>
            </Link>  
            
          </Navwrapper>
         
               
        );
    }
}

const Navwrapper=styled.nav `
.nav-link{
  font-size:1.3rem;
  text-transform:capitalize;
}
`

