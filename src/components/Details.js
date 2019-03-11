import React, { Component } from 'react';
import {ShopConsumer} from '../context';
import{Link} from 'react-router-dom';
import{ButtonContainer} from './Button'

export default class Details extends Component {
  render() {
    return (
      <ShopConsumer>
        {value=>{
          const {id,img,info,title,like,dislike,distance}=value.detailShope;
     return(
       <div className="container py-5">
       {/*title*/}
       <div className="row">
       <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
       <h1>{title}</h1>

       
       </div>
       
       </div>
       {/*end title*/}
       {/*shop info*/}
       <div className="row">
       <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
       <img src={img} className="img-fluid" alt="product"></img>
       
       </div>
       <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
       <h1>Shop:{title}</h1>
       <h3 className="text-title text-uppercase text-muted mt-3 mb-2">
       distance:<span className="text-uppercase">
       {distance}

       </span>
       
       </h3>
       <p className="text-capitalize font-weight-bold mt-3 mb-0"> 
       About the {title}</p>
       <p className="text-muted lead font-weight-bold" >
       {info}</p>

       <div>
         <Link to = '/'>
         <ButtonContainer>
Back to Shops 
         </ButtonContainer>
         </Link>
         <ButtonContainer like
         disabled={like?true:false||dislike?true:false}
         onClick={()=>{
           value.addToPreflist(id);
         }}>
       {like ? "all Ready liked":"Like"}
 
         </ButtonContainer>
       </div>
       </div>
       </div>
       </div>
     );
     }}
      </ShopConsumer>
    )
  }
}
