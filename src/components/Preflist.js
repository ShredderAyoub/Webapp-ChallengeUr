import React, { Component } from 'react'
import Title from './Title';
import Prefcollumns from './prefcollumns';
import Emptypref from './emptypreflist';
import {ShopConsumer} from '../context';
import Shoppreflist from "./Shoppreflist";
import Shoptotals from "./Shoptotals";
export default class Preflist extends Component {
  render() {
    return (
      <section>
        <ShopConsumer>
          {value => {
            const { preflist } = value;
            console.log ( value, preflist);
            if( preflist.length > 0){
              return( 
              <React.Fragment> 
                    <Title name="Your" title="PrefList ;)"></Title>
                    <Prefcollumns></Prefcollumns>
                     <Shoppreflist value={value} /> 
                     <Shoptotals value={value}></Shoptotals>
              </React.Fragment>
              );
            }else{
                  return<Emptypref></Emptypref>;
            }
          }}
        </ShopConsumer>
            
      </section>
    );
  }
}
