import { useState } from 'react';
import axios from 'axios';

function CreateEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    latitude: '',
    longitude: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3001/api/events', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Event successfully created!');

      setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        latitude: '',
        longitude: '',
      });
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.error || 'Event creation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input
        placeholder='Title'
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        placeholder='Description'
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type='datetime-local'
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        placeholder='Location'
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
      <input
        type='number'
        step='any'
        placeholder='Latitude'
        value={formData.latitude}
        onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
      />
      <input
        type='number'
        step='any'
        placeholder='Longitude'
        value={formData.longitude}
        onChange={(e) =>
          setFormData({ ...formData, longitude: e.target.value })
        }
      />
      <button type='submit'>Create</button>
    </form>
  );
}

export default CreateEvent;
