import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>sorry</h2>
      <p>that page is ciuciu</p>

      <Link to="/">back acasa</Link>
    </div>
  );
};

export default NotFound;
