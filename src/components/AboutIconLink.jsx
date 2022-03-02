import {FaQuestion} from "react-icons/fa"
import {Link} from "react-router-dom"
const AboutIconLink = () => {
  return (
    <Link to="/about">
      <FaQuestion className="about-link"  size={30} />
    </Link>
  )
}
export default AboutIconLink