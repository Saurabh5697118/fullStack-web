import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [userData, setUserData] = useState({});
  const [commentList, setListComment] = useState([]);
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3005/posts/byId/${id}`)
      .then((res) => setUserData(res.data));

    axios
      .get(`http://localhost:3005/comments/${id}`)
      .then((res) => setListComment(res.data));
  }, []);

  const addComment = () => {
    axios
      .post("http://localhost:3005/comments", {
        PostId: id,
        CommentsBody: newComment,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {userData.title} </div>
          <div className="body">{userData.postText}</div>
          <div className="footer">{userData.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={() => addComment()}> Add Comment</button>
        </div>
        <div className="listOfComments">
          {commentList.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.CommentsBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
