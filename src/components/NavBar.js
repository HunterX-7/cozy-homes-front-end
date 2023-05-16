import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Houses</Link>
      </li>
      <li>
        <Link to="/reserve">Reserve</Link>
      </li>
      <li>
        <Link to="/add">AddHouse</Link>
      </li>
      <li>
        <Link to="/remove">removeHouse</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
