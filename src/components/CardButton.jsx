import "./CardButton.scss";

export default function CardButton(props) {
  return (
    <button onClick={props.onClick} className="submit-btn">
      SUBMIT
    </button>
  );
}
