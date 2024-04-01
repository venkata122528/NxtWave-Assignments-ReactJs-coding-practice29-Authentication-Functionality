// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </nav>
)

export default Header
