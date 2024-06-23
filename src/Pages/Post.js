import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3005/posts/byId/${id}`)
      .then((res) => setUserData(res.data));
  }, []);
  return (
    <div className="post">
      <div className="title"> {userData?.title} </div>
      <div className="body">{userData?.postText}</div>
      <div className="footer">{userData?.username}</div>
    </div>
  );
};

export default Post;
