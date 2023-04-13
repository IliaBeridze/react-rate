import "./CardRateItems.scss";



export default function CardRateItems(props) {
  // let numbers =  props.points.map((item)=>{
  //   return item
  // })
  
  function getValue() {
   
    // console.log(props.item.num);
    // console.log(props.item.id);
    props.getEvent(props.item.id)
  }
 
  return (
    <div className="points">
      <div onClick={getValue} className="point">{props.item.nam}</div>
     </div>
  );
}
