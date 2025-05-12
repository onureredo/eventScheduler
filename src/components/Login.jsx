import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        formData
      );
      //   console.log(response);
      login(response.data.token);

      navigate('/profile');
    } catch (error) {
      console.log(error);
      alert(error.response.data.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='email'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type='password'
        placeholder='Password'
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type='submit'>LOGIN</button>
    </form>
  );
}

export default Login;
