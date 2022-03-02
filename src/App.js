import { Fragment, useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedbackData from "./data/FeedBackData"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    console.log(id)
    if(window.confirm('are you sure you want to delete it?')){
      setFeedback(feedback.filter((item)=> {
        return item.id !== id 
      }))
    }

   
  }
  return ( 
    <Fragment>
      <Header text='Feedback UI'/>
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList 
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </Fragment>

  )
}

export default App