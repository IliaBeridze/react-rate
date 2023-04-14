import "./CardRateItems.scss";

export default function CardRateItems(props) {
  function getValue() {
    props.getEvent(props.item.id);
  }
  let checkClassName = props.active ? "active" : "";
  return (
    <div className="points">
      <div onClick={getValue} className={`point ${checkClassName}`}>
        {props.item.num}
      </div>
    </div>
  );
}
