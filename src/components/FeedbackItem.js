import {FaTimes} from 'react-icons/fa';
import Card from "./shared/Card";

const FeedbackItem = (props) => {
  return (
    <Card className="card" reverse={true}>
      <div className="num-display">{props.item.rating}</div>
      <button 
        onClick={() => {props.handleDelete(props.item.id)} }
        className="close">
        <FaTimes color="purple"/>
      </button>
      <div className="text-display">{props.item.text}</div>
    </Card>
  )
}

export default FeedbackItem