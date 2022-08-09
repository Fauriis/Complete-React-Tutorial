import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <div className="create">
      <Link to="/">
        <h2>Add new blog</h2>
        <button>add new blog</button>
      </Link>
    </div>
  );
};

export default Create;
