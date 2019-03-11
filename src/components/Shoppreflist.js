import React from 'react';
import Preflistitem from './Preflistitem';
import preflistitem from './Preflistitem';
export default function Shoppreflist({value}) {
    const {preflist} = value;
    console.log(value);
    return (
    
    <div className="container-fluid">
        {preflist.map(item=>{
            return <Preflistitem key = {item.id} item={item} value={ value}/>
        })}
        
    </div>
    );
}
