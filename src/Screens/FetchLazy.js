import { useNavigate } from "react-router-dom";

const FetchLazy = (props) => {
  const dev = props.usersList;
  let navigate = useNavigate();

  console.log(dev);
  return (
    <div>
      {dev?.map((value, ind) => (
        <div
          key={ind}
          className="post"
          onClick={() => navigate(`/post/${value.id}`)}
        >
          <div className="title"> {value.title} </div>
          <div className="body">{value.postText}</div>
          <div className="footer">{value.username}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchLazy;
