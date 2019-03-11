import React from 'react'

export default function preflistitem({item, value}) {
  const{ id, title, img, distance, like,dislike} = item;
  const{increment , decrement , removeitem}= value;
  return (
    <div className ="row my-2 text-capitalize text-center">
    
    <div className ="col-10 mx-auto col-lg-3">
    <img src={img} style = {{width:'5rem',height:"5rem"}} className="img-fluid" alt="shop"/>

    
    </div>
    <div className="col-10 mx-auto col-lg-3">
    <span className=" d-lg-none"> <strong>Shop:</strong> </span>
    <strong>{title}</strong>
    </div>
    <div className="col-10 mx-auto col-lg-3">
    <span className=" d-lg-none"><strong> Distance:</strong> </span>
    <strong>{distance}</strong>
    </div>
    <div className="col-10 mx-auto col-lg-3">
    <div className="cart-icon" onClick={()=> removeitem(id)}>
    <i className="fas fa-trash">
    </i>
    </div>
    </div>
    </div>
  )
}
