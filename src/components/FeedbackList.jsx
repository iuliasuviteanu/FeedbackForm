
import FeedbackItem from "./FeedbackItem"

const FeedbackList = (props) => {
  if(!props.feedback || props.feedback.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <div className="feedback-list">
      {props.feedback.map((item)=>{
        return <FeedbackItem  
          key={item.id} 
          item={item}
          handleDelete={props.handleDelete}
        />
      })}
    </div>
  )
}
export default FeedbackList;