import {FaTimes, FaEdit} from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from "./shared/Card";


const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
  return (
    <Card className="card" reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button 
        onClick={() => {deleteFeedback(item.id)} }
        className="close">
        <FaTimes color="purple"/>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem