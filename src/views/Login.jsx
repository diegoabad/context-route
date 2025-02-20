import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          login('diego@diego.com', '123456');
          navigate('/');
        }}>
        Login
      </button>
    </div>
  );
};

export default Login;
