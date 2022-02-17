import React, { useState } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
// import Input from "./components/Input";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButt from "./components/UI/button/MyButt";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "description" },
    { id: 2, title: "JS", body: "description" },
    { id: 3, title: "JS", body: "description" },
  ]);
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value})}
          type="text"
          placeholder="Name of postlist"
        ></MyInput>
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Description of postlist"
        ></MyInput>
        <MyButt onClick={addNewPost}>Create postlist</MyButt>
      </form>
      <PostList posts={posts} title="List of JS" />
    </div>
  );
}

export default App;
