import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>404 NOT FOUND</h2>
      <Link to='/'>BACK TO HOME</Link>
    </div>
  );
}

export default NotFound;
