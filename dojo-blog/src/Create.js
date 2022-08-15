import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('yoshi');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = { title, body, author };

    setIsPending(true);

    setTimeout(() => {
      fetch('http://localhost:3000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogs),
      }).then(() => {
        console.log('new blog added');

        setIsPending(false);
        history.push('/');
      });
    }, 1000);
  };

  return (
    <div className="create">
      <Link to="/">
        <h2>Add new blog</h2>
        <button>add new blog</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>blog body:</label>

        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author: </label>

        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {!isPending && <button>create</button>}
        {isPending && <button disabled>adding...</button>}
      </form>
    </div>
  );
};

export default Create;
