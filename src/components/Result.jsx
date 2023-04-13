import "./Result.scss"
import ResultImg from "./img/terminal.png"
import ResultSelectNum from "./ResultSelectNum"
import ResultTitle from "./ResultTitle"
import ResultText from "./ResultText"
export default function Result(props) {
  
// console.log(props.item);

  return <div className="result">
  
    <img src={ResultImg} alt="TerminalImage" />
    <ResultSelectNum text={`You selected ${props.item} out of 5`} />
<ResultTitle title = {"Thank you"} />
<ResultText text={"We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"} />
  </div>
}