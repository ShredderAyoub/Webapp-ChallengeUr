import React, { Component } from 'react'
import{storeShops,detailShope} from './data';
const ShopContext = React.createContext();
//Provider
//Consumer
 class ShopProvider extends Component {
state={
    shops:[],
    detailShope:detailShope,
    preflist:[],
    disliked:[],
    preflisttotal:0,

};
componentDidMount(){
    this.setShops();
}



setShops=()=>{
    
    let tempShops=[];
    let temp=[];
    var a=0;
    var x=0;
    storeShops.forEach( item =>{
        var a=item.distance;
        var push=item; 
        if (a<=x){a=1000000000000;}
        if (a>x){
       storeShops.forEach(item=>{
        var b=item.distance;
        
        if(a>b & b>x){a=b; push=item; }
       })
    
        x=push.distance;
       
    const singleItem={...push};
    tempShops=[...tempShops,singleItem];
    temp=[...temp,singleItem];
}
    
    })

    this.setState(()=>{
        return {shops:tempShops};
    })
};

getItem=(id)=>{
    const shop=this.state.shops.find(item => item.id === id);
    return shop;
};
handleDetail=(id)=>{
    const shop=this.getItem(id);
    this.setState(()=>{
return { detailShope:shop};
    });
};
addToPreflist=(id)=>{
    let tempShops =[...this.state.shops];
    
    const index = tempShops.indexOf(this.getItem(id));
    const shop =  tempShops[index];
    shop.like = true;
    tempShops=tempShops.filter(item=> item.id !== id);
    this.setState(()=>{
        return{shops:tempShops,preflist:[...this.state.preflist,shop]};
    },()=>{this.addTotals();});
};
removeitem =(id)=>{
    let tempShops = [...this.state.shops];
    let temppreflist=[...this.state.preflist];
    
    
    const index = temppreflist.indexOf(this.getItem(id));
   
    const removedshop = temppreflist[index];
    removedshop.like=false;
    
    temppreflist=temppreflist.filter(item=> item.id !== id);
    
    this.setState(()=>
    {
        return{
        preflist:[...temppreflist],
        shops:[...tempShops],
        }
    },()=>{
        this.addTotals();
    })

};
addTodislik=(id)=>{
    let tempShops =[...this.state.shops];
    const index = tempShops.indexOf(this.getItem(id));
    const shop = tempShops[index];
    shop.dislike = true;
    this.setState(()=>{
        return{shops:tempShops,preflist:[...this.state.preflist,shop]};
    },()=>{this.addTotals();});
}


clearpreflist =(id)=>{
    this.setState(()=>{
        return{
            preflist:[], 
        }
    },()=>{
        this.setShops();
        this.addTotals();
    });
}
addTotals=()=>{
    let Total = 0 ;
    this.state.preflist.map(item=>(Total+=1));
    this.setState(()=>{
        return{
            preflisttotal:Total, 
        }
    })
}


  render() {

    return (
      <ShopContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToPreflist:this.addToPreflist,
          addTodislik:this.addTodislik,
          removeitem:this.removeitem,
          clearpreflist:this.clearpreflist
      }}>
          {this.props.children}
          
           </ShopContext.Provider>
        
      
    )
  }

}
const ShopConsumer=ShopContext.Consumer;
export{ShopProvider,ShopConsumer};
