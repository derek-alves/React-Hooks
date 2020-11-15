import React,{memo} from "react";

interface postProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const PostItem: React.FC<postProps> = (props) => {
  return (
    <li>
      <strong>{props.post.title}</strong>
      <p>{props.post.body}</p>
    </li>
  );
};

export default memo(PostItem);
