import "./App.css";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Admin from "./components/admin/Admin";
import Post from "./components/post/Post";
import Error from "./components/error/Error";
import { LabelsContext, PostsContext } from "./context/context";
import React, { useEffect } from "react";
import { getLabels } from "./services/labelsServices";
import { getPosts } from "./services/postsServices";
import EditList from "./components/admin/editPosts/EditList";
import EditPage from "./components/admin/editPosts/EditPage";

function App() {
  const [labels, setLabels] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    async function fetchLabels() {
      const data = await getLabels();
      setLabels(data);
      console.log(data);
    }
    fetchLabels();
  }, []);
  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const addLabelToContext = (newLabel) => {
    setLabels([...labels, newLabel]);
  };
  const editLabelToContext = (editLabel, id) => {
    let itemID = id - 1;
    setLabels(labels.splice(itemID, 1, {editLabel}));
    setLabels(
      labels.map((item) => {
        console.log(item)
        /* if (item.id === id) {
          return editLabel;
        } */
      })
    );
    console.log(labels);
  };
  const deleteLabelToContext = (id) => {
    setLabels(
      labels.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <LabelsContext.Provider
      value={{
        labels: labels,
        addLabelToContext,
        editLabelToContext,
        deleteLabelToContext,
      }}
    >
      <PostsContext.Provider value={posts}>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/editList" element={<EditList />} />
            <Route path="/editPage/:id" element={<EditPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>{" "}
      </PostsContext.Provider>
    </LabelsContext.Provider>
  );
}

export default App;
