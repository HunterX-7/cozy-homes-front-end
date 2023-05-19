import { Link } from 'react-router-dom';
import { func } from 'prop-types';

const Navbar = (props) => {
  const { handleLogout } = props;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Houses</Link>
        </li>
        <li>
          <Link to="/reserve">Reserve</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/add">AddHouse</Link>
        </li>
        <li>
          <Link to="/remove">removeHouse</Link>
        </li>
      </ul>
      <button type="button" onClick={handleLogout} className="">log_out</button>
    </nav>
  );
};

Navbar.propTypes = {
  handleLogout: func.isRequired,
};
export default Navbar;
