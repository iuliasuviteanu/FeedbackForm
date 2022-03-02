const FeedbackStats = (props) => {
  //Calculate ratings avg

  let average = props.feedback.reduce((acc, cur)=> {
    return acc + cur.rating
  }, 0) / Math.floor(props.feedback.length)

  console.log(average)
  return (
    <div className="feedback-stats">
      <h4>{props.feedback.length} Reviews </h4>
      <h4>Average rating: {average}</h4>
      </div>
  )
}

export default FeedbackStats