import Card from "../components/shared/Card"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <Link to="/"> back to home
        </Link>
      </div>
    </Card>
  )
}

export default About