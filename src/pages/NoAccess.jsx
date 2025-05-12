import { Link } from 'react-router-dom';

function NoAccess() {
  return (
    <div>
      <h2>401 UNAUTHORIZED</h2>
      <Link to='/login'>Please login first</Link>
    </div>
  );
}

export default NoAccess;
