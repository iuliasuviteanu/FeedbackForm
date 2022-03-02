import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([])

  useEffect(()=>{
    console.log(123)
    fetchFeedback()
  }, [])

  //fetchFeedback

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json();
    setFeedback(data)
    setIsLoading(false)
  }
  
  const [feedbackEdit, setFeedbackEdit] = useState(
    {
      item: {},
    edit: false
    }
  )
  //delete feedback
  const deleteFeedback = async (id) => {
    console.log(id)
    if(window.confirm('are you sure you want to delete it?')){
      await fetch (`/feedback/${id}`, {method: 'DELETE'}) 
      setFeedback(feedback.filter((item)=> {
        return item.id !== id 
      }))
    }
  }

  //add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json();

    setFeedback([data, ...feedback])
  }

  //update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
       headers: 
       {
         'Content-Type': 'application/json'
       },
      body: JSON.stringify(updItem)
    })

    const data = await response.json();
    setFeedback(feedback.map((item)=> (item.id === id ? {...item, ...data} : item))
  )}

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }
  return (
    <FeedbackContext.Provider 
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;