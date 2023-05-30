import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';
import './stylesheets/SplashSignup.css';
import Logo from './images/logo.png';

const SplashSignup = (props) => {
  const { SessionStatus } = props;

  const [user, setUser] = useState({
    name: '',
    errors: [],
  });

  const navigate = useNavigate();
  const { name } = user;

  useEffect(() => {
    (async () => {
      const { isLoggedIn, user } = await SessionStatus();
      if (isLoggedIn) {
        setUser(user);
        navigate('/home');
      }
    })();
  }, [SessionStatus, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();
    if (data.status === 'created') {
      setUser({
        ...user,
        name: '',
      });
      navigate('/');
      window.location.reload(false);
    } else {
      setUser({
        ...user,
        errors: data.errors.name,
      });
    }
  };

  return (
    <div className="container-page">
      <div className="form-container-log sign-up-container">
        <form className="form-log" action="#" onSubmit={handleRegister}>
          <div>
            {user.errors.map((error) => (
              <h3 className="error-notification" key={error}>{error}</h3>
            ))}
          </div>
          <img className="logo-signin" src={Logo} alt="logo" />
          <div className="username-input-container">
            <div className="border-grey">
              <div className="border-green">
                <input className="username-input" required type="name" placeholder="Username" name="name" value={name} onChange={handleChange} />
              </div>
            </div>
          </div>
          <button type="submit" className="splash-action-btn marg-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SplashSignup;

SplashSignup.propTypes = {
  SessionStatus: func.isRequired,
};
