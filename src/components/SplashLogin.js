import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';

const SplashLogin = (props) => {
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

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/accounts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });

    const data = await response.json();

    if (data.login) {
      sessionStorage.setItem('cozy_user', JSON.stringify(data.user));
      setUser({
        ...user,
        name: '',
      });
      navigate('/home');
    } else {
      setUser({
        ...user,
        errors: data.errors.name,
      });
      navigate('/signup');
    }
  };

  return (

    <div className="form-container sign-in-container">
      <form className="form" action="#" onSubmit={handleLogin}>
        <div>
          {user.errors.map((error) => (
            <h3 className="error-notification" key={error}>{error}</h3>
          ))}
        </div>
        <h1 className="form-title">Sign in</h1>
        <div className="username-input-container">
          <img src="" className="username-img" alt="username-icon" />
          <input className="username-input" required type="name" placeholder="Username" name="name" value={name} onChange={handleChange} />
        </div>
        <button type="submit" className="splash-action-btn">Sign In</button>
      </form>
    </div>

  );
};

export default SplashLogin;

SplashLogin.propTypes = {
  SessionStatus: func.isRequired,
};
