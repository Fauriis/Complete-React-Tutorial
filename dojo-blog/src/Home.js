import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // let name = 'mario';

  // const [name, setName] = useState('mario');
  // const [age, setAge] = useState(25);

  // const handleClick = () => {
  //   setName('luigi');
  //   setAge(30);
  // };

  // const handleClickAgain = (name, e) => {
  //   console.log('hello ' + name, e.target);
  // };

  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true);

  // const [error, setError] = useState[null];

  // const [name, setName] = useState('mario');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        // if (!res.ok) {
        //   throw Error('couldnt load data');
        // }

        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        // setError(null);
      });
    // .catch((err) => {
    //   setError(err.message);
    // });
  }, []);

  return (
    <div className="home">
      {/* {error && <div> {error}</div>} */}
      {isPending && <div> Loading... </div>}

      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs"
          // handleDelete={handleDelete}
        ></BlogList>
      )}

      {/* <button onClick={() => setName('luigi')}>change name</button> */}
      {/*
      <p>{name}</p>
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title="Mario's Blogs"
      ></BlogList> */}
    </div>
  );
};

export default Home;
