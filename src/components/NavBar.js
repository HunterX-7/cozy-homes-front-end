import { Navbar, Nav } from 'react-bootstrap';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Logo from './images/logo.png';

const NavBar = (props) => {
  const { handleLogout } = props;

  return (
    <Navbar className="p-0" expand="lg" variant="dark" style={{ backgroundColor: '#1c2331' }}>
      <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            height="60"
            className="d-inline-block justify-content-center"
            alt="Cozy Homes logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav mb-0" />
        <Navbar.Collapse id="basic-navbar-nav mb-0">
          <Nav className="justify-content-end navbar-collapse">
            <NavLink className="nav-link" to="/home">HOUSES</NavLink>

            <NavLink className="nav-link" to="/reserve">ADD RESERVE</NavLink>

            <NavLink className="nav-link" to="/reservations">RESERVATIONS</NavLink>

            <NavLink className="nav-link" to="/add">ADD HOUSE</NavLink>

            <NavLink className="nav-link" to="/remove">REMOVE HOUSE</NavLink>

          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>LOG OUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  handleLogout: func.isRequired,
};
export default NavBar;
