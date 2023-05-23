import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';
import { func } from 'prop-types';
import Logo from './images/logo.png';

const SideBar = (props) => {
  const { handleLogout } = props;
  const currentYear = new Date().getFullYear();
  const currentUser = JSON.parse(sessionStorage.getItem('cozy_user'));
  const user = currentUser.name.toUpperCase();

  return (
    <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
      <ul className="nav flex-column text-white w-100">
        <li className="h3 text-dark my-2 text-center">
          <img src={Logo} alt="Logo" height="100" className="d-inline-block align-top" />
        </li>
        <li className="nav-user text-start">
          <span className="ms-4 fs-4 text-white">{user}</span>
        </li>
        <div className="col-12">
          <div className="box" />
        </div>
        <div className="col-12">
          <div className="box" />
        </div>
        <div className="col-12">
          <div className="box" />
        </div>
        <li className="nav-link text-start">
          <Link to="/home" className="text-decoration-none"><span className="mx-2 fs-5 text-white">HOUSES</span></Link>
        </li>
        <li className="nav-link text-start">
          <Link to="/reserve" className="text-decoration-none"><span className="mx-2 fs-5 text-white">ADD RESERVE</span></Link>
        </li>
        <li className="nav-link text-start">
          <Link to="/reservations" className="text-decoration-none"><span className="mx-2 fs-5 text-white">RESERVATIONS</span></Link>
        </li>
        <li className="nav-link text-start">
          <Link to="/add" className="text-decoration-none"><span className="mx-2 fs-5 text-white">ADD HOUSE</span></Link>
        </li>
        <li className="nav-link text-start">
          <Link to="/remove" className="text-decoration-none"><span className="mx-2 fs-5 text-white">REMOVE HOUSE</span></Link>
        </li>
        <Nav.Link onClick={handleLogout}>
          <span className="mx-2 fs-5 text-white">LOG OUT</span>
        </Nav.Link>
      </ul>

      <div className="h4 w-100 text-center">
        <a
          href="https://github.com/HunterX-7/cozy-homes-front-end/tree/homepage-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter style={{ color: 'white', fontSize: '16px' }} />
          <i className="px-2" />
        </a>
        <a
          href="https://github.com/HunterX-7/cozy-homes-front-end/tree/homepage-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF style={{ color: 'white', fontSize: '16px' }} />
          <i className="px-2" />
        </a>
        <a
          href="https://github.com/HunterX-7/cozy-homes-front-end/tree/homepage-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiGoogle style={{ color: 'white', fontSize: '16px' }} />
          <i className="px-2" />
        </a>
        <a
          href="https://github.com/HunterX-7/cozy-homes-front-end/tree/homepage-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsVimeo style={{ color: 'white', fontSize: '16px' }} />
          <i className="px-2" />
        </a>
        <a
          href="https://github.com/HunterX-7/cozy-homes-front-end/tree/homepage-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP style={{ color: 'white', fontSize: '16px' }} />
          <i className="px-2" />
        </a>
        <div className="fs-6 text-center text-white p-2 me-3">
          <span>
            &copy;
            {' '}
            {currentYear}
            {' '}
            Cozy Homes
          </span>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  handleLogout: func.isRequired,
};

export default SideBar;
