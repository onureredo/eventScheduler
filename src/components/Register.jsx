import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  //   console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/users', formData);
      alert(
        'successfully registered, you are now being redirected to login page'
      );
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert(error.response.data.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>SignUp</h2>
      <input
        type='text'
        placeholder='email'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <input
        type='password'
        placeholder='password'
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type='submit'>REGISTER</button>
    </form>
  );
}

export default Register;
