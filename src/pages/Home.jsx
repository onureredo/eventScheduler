import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';

function Home() {
  const [events, setEvents] = useState([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events');
        // console.log(response.data);
        setEvents(response.data.results);
      } catch (error) {
        console.log(error);
        alert('Failed to fetch events');
      }
    };

    fetchEvents();
  }, []);

  // const handleDelete = async (id, title) => {
  //   const confirm = window.confirm(
  //     `Are you sure you want to delete Event: ${title}?`
  //   );
  //   if (!confirm) return;

  //   try {
  //     const token = localStorage.getItem('token');
  //     await axios.delete(`http://localhost:3001/api/events/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     setEvents((prev) => prev.filter((event) => event.id !== id));
  //     alert(`${title} was deleted`);
  //   } catch (error) {
  //     console.log(error);
  //     alert('Failed to delete event');
  //   }
  // };

  return (
    <div>
      <h2>All Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((event) => (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleString()}</p>
            <p>{event.location}</p>
            <p>
              Lat: {event.latitude}, Lng: {event.longitude}
            </p>
            {/* {isAuthenticated ? (
              <button onClick={() => handleDelete(event.id, event.title)}>
                Delete
              </button>
            ) : (
              ''
            )} */}
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
