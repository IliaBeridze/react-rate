// import { useState } from "react";
import "./CardRateItems.scss";

export default function CardRateItems(props) {
  // let numbers =  props.points.map((item)=>{
  //   return item
  // })
  // console.log(props.active);
  function getValue() {
    // if (props.item.id === props.active) {
    //   console.log("asada");
    // }
    
    // console.log(props.item.num);
    // console.log(props.item.id);
    props.getEvent(props.item.id);
  }
  let checkClassName = props.active? "active" : "";
  return (
    <div className="points">
      <div onClick={getValue} className={`point ${checkClassName}`}>
        {props.item.num}
      </div>
    </div>
  );
}
