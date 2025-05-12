import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [user, setuser] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/api/auth/profile',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // console.log(response);
        setuser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  if (!user) return <p>Please??</p>;

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <p>creation date: {user.createdAt}</p>
    </div>
  );
}

export default Profile;
