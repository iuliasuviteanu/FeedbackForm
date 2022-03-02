import {Navigate, useNavigate, Routes, Route} from "react-router-dom"
const Post = () => {
  const status = 200;
  const navigate = useNavigate();
  if(status === 404) {
    return <Navigate to="/notfound"/>
  }

  const onClick = () => {
    navigate('/about')
  }

  return (
    <div>
      <h1>Post</h1>
    <button onClick={onClick}>click me</button>
    <Routes>
      <Route path="/show" element={<h1>hello world</h1>}></Route>
    </Routes>
    </div> 
  )
}

export default Post