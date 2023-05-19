import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { func } from 'prop-types';

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

    <div className="form-container sign-up-container">
      <form className="form" action="#" onSubmit={handleRegister}>
        <div>
          {user.errors.map((error) => (
            <h3 className="error-notification" key={error}>{error}</h3>
          ))}
        </div>
        <h1 className="form-title">Create Account</h1>
        <div className="username-input-container">
          <img src="" className="username-img" alt="username-icon" />
          <input className="username-input" required type="name" placeholder="Username" name="name" value={name} onChange={handleChange} />
        </div>
        <button type="submit" className="splash-action-btn marg-btn">Sign Up</button>
      </form>
    </div>

  );
};

export default SplashSignup;

SplashSignup.propTypes = {
  SessionStatus: func.isRequired,
};
