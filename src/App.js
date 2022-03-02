import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {

  return ( 
    <FeedbackProvider>  
      <Router>
        <Header text='Feedback UI'/>
        <div className="container">
          <Routes>
            <Route exact path="/" 
              element={
                <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
                <AboutIconLink/>
                </>
              }
            >
            </Route>
            <Route path="/about" element={<About/>} />
            <Route path="/post/*" element={<Post/>} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App