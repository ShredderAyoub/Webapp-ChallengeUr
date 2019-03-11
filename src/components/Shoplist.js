import React, { Component } from 'react';
import Shop from "./Shop";
import Title from './Title';
import{ShopConsumer} from '../context';
import fire from '../config/fire';
export default class Shoplist extends Component {
  
  render() {
    return (
      <React.Fragment >
        <div className="py-5">
        <div className="container">
        <Title name="All" title="The Nearby Shops"></Title>
        <div className="row">
<ShopConsumer>
  {value=>{
return value.shops.map(shop=>{
  return  <Shop key={shop.id} shop={shop}/>;
})
  }}
</ShopConsumer>

        </div>
        </div>
        </div>
        
      </React.Fragment>
    )
  }
}
