import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:3000' + id);

  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:3000' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div> loading </div>}
      {error && <div> {error} </div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>

          <button onClick={handleClick}>delete</button>
        </article>
      )}
      <h2>Blog Details - {id} </h2>
    </div>
  );
};

export default BlogDetails;
