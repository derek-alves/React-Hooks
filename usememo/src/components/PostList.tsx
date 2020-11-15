import React, { useEffect, useState } from "react";

import PostItem from "./PostItem";

interface postProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<postProps[]>([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data) => {
        setPosts(data);
      });
    });
  }, []);

  return (
    <>
    <input onChange={e=> setNewPost(e.target.value)} value={newPost}/>
      <ul>
        
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
