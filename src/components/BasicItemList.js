import React from 'react';
import BasicItemDisplay from '../components/BasicItemDisplay';
import '../styles/FlexList.css'

export default function BasicItemList({target, items}){
    return (
        <div className="FlexList">
            {items.map((item)=><BasicItemDisplay key={item["id"]} {...item} target={target} />)}
        </div>
    )
}
