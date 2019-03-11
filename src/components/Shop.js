import React, { Component } from 'react'
import styled from 'styled-components';
import{Link} from 'react-router-dom';
import {ShopConsumer} from '../context';
import PropTypes from 'prop-types';
export default class Shop extends Component {
  render() {
    const {id,title,img,distance,info,like,dislike,timedislike}=this.props.shop;
    return (
      <ShopWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        <ShopConsumer>
          {(value)=>(<div className="img-container p-5" 
        onClick={()=>
        
        value.handleDetail(id)       
        
        
        }>
        <Link to="/Details">
        <img src={img} alt="shop" className="card-img-top" ></img>
        </Link>


        <button className="cart-btn" disabled={like ? true : false || dislike ? true : false }  onClick={()=>{
          value.addToPreflist(id);
      
      }}>
      {like?(<p className="text-capitalize mb-0" disabled > In preferred List</p>):(<i className="fas fa-heart"></i>)}
        
        </button>
      <button className="cart2" disabled={like ? true : false || dislike ? true : false } onClick={()=>{
        value.addTodislik(id);
      
    }}>
    {dislike?(<p className="text-capitalize mb-0" disabled > Disliked</p>):(<i className="fas fa-thumbs-down"></i>)}
      
      </button>

        <div className="card-footer d-flex justify-content-between">
<p className="align-self-center mb-0">
{title}
<h5 className="text-blue font-italic mb-0">
<span className="mr-1">m-Dis</span>
{distance}
</h5>

</p>
</div>

        </div>)}
        


        </ShopConsumer>


        </div>
        
      </ShopWrapper>
    )
  }
}
Shop.propTypes = {
  shop:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    distance:PropTypes.number,
    like:PropTypes.bool,
    dislike:PropTypes.bool

  }).isRequired
}
const ShopWrapper= styled.div`
.card{
  border-color:transparent;
  transition:all 1s linear;

}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 2px 0px rgba(0,0,0,0.2);
  }
  .card-footer{
    background:rgba(247,247,247);
  }
}
.img-container{
  position:relative;
  overflow:hidden;
}
.card-img-top{
  transition: all 1s linear;
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}

.cart-btn{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  background: var(--mainlightgrey);
  border:none;
  color:#F42C04;
  font-size:1.4rem;
  border-radius:0.5rem 0 0 0;
  transform:translate(100%,100%);
}
.img-container:hover .cart-btn{
  transform:translate(0,0);
  transition: all 1s linear;
}
.cart-btn:hover{
  color:var(--mainBlur);
  cursor:pointer;
}
.cart2{
  position:absolute;
  left:0;
  bottom:0;
  background: var(--mainlightgrey);
  border:none;
  color:#0F1A20;
  font-size:1.4rem;
  padding:0.2rem 0.4rem;
  border-radius:0 0.5rem 0 0;
  transform:translate(-100%,100%);
}
.cart2:hover{
  color:var(--mainBlur);
  cursor:pointer;
}
.img-container:hover .cart2{
  transform:translate(0,0);
  transition: all 1s linear;
}

`;