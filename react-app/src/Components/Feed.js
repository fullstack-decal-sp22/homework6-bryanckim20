import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
  
  const [data, setData] = useState();
  const getData = () => {
    axios
      .get('http://localhost:3002/posts')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data?.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} key={d.id} postId={d.id} />
        )
      }

      <NewPost/>
    </div>
  )

}


export default Feed;