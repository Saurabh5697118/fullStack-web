import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Post from "./Pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/createPost">Create Post</Link>
          <Link to="/">Home</Link>
        </div>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createPost" exact Component={CreatePost} />
          <Route path="/post/:id" exact Component={Post} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;