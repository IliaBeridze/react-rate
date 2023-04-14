import "./Card.scss";
import Star from "./img/Path.png";
import CardRateItems from "./CardRateItems";
import CardButton from "./CardButton";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

const arr = [
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
  { id: 4, num: 4 },
  { id: 5, num: 5 },
];

export default function Card(props) {
  console.log(props);

 

 

  return (
    <div className="card">
      <div className="star-img">
        <img src={Star} alt="star" />
      </div>
      <CardTitle title={"How did we do?"} />
      <CardText
        text={
          "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        }
      />
      <div>
        {arr.map((item) => (
          <CardRateItems
            getEvent={props.onSelect}
            active={props.activeId === item.id}
            key={item.id}
            item={item}
          />
        ))}{" "}
      </div>
      {/* <CardRateItems points={[1, 2, 3, 4, 5]} /> */}
      <CardButton onClick={props.onSubmit}  />
    </div>
  );
}
