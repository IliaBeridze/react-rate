import { useState } from "react";
import "./CardRateItems.scss";

export default function CardRateItems(props) {
  // let numbers =  props.points.map((item)=>{
  //   return item
  // })
  const [active, setActive] = useState(false);
  function getValue() {
    setActive((active) => !active);
    // console.log(props.item.num);
    // console.log(props.item.id);
    props.getEvent(props.item.id);
  }
let checkClassName =active ? 'active':""
  return (
    <div className="points">
      <div onClick={getValue} className={`point ${checkClassName}`}>
        {props.item.num}
      </div>
    </div>
  );
}
