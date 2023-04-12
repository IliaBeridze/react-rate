import "./Card.scss";
import Star from "./img/Path.png";
import CardRateItems from "./CardRateItems";
import CardButton from "./CardButton";

const arr = [
  { id: 1, nam: 1 },
  { id: 2, nam: 2 },
  { id: 3, nam: 3 },
  { id: 4, nam: 4 },
  { id: 5, nam: 5 },
];

export default function Card(params) {
  return (
    <div className="card">
      <div className="star-img">
        <img src={Star} alt="star" />
      </div>
      <h2 className="header">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div>{arr.map((item) => (
        <CardRateItems key={item.id} item={item} />
      ))} </div>
      {/* <CardRateItems points={[1, 2, 3, 4, 5]} /> */}
      <CardButton />
    </div>
  );
}