import React from 'react';
import {Link} from 'react-router-dom';

export default function Shoptotals({value}) {
    const{preflisttotal,clearpreflist} = value;
  return (
    
    <React.Fragment>
        
        <div className = "container">
        <div className = "row">
        <div className="col-10 mt-2 ml-s-5 ml-md-auto col-sm-8 text-capitalize text-right">
       <h5> <span className="text-title">
        
        Toral Shops :
        </span>
        <strong>{preflisttotal}</strong>
        </h5>
        <Link to ='/'>
        
        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
        onClick={()=> clearpreflist()}
        >
        Clear Pref List
        </button>
        </Link>
        
        </div>
        </div>
        
        
        </div>
        </React.Fragment>  
    
  )
}
