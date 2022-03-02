import {Link} from "react-router-dom"
const Header  = (props) => {
  return (
    <div className="container">
      {props.text}
    </div>
  )
}

export default Header;