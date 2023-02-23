import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./post.module.css";
import CardMedia from "@mui/material/CardMedia";
import { LabelsContext, PostsContext } from "../../context/context";
import { getOneLabelOfPost } from "../../services/labelsServices";

function PostDetails() {
  const { id } = useParams();
  //const labels = useContext(LabelsContext);
  const dataPosts = useContext(PostsContext);
  const [post, setPost] = React.useState({});


  useEffect(() => {
    setPost(dataPosts.find((item) => parseInt(id) === item.id));
    
  }, [dataPosts,id]);

  
  return (
    <>
      <div className={styles.content}>
        <div className={styles.head}>
          <h2>{post.title}</h2>
          <div>Label</div>
        </div>
        <CardMedia
          component="img"
          height="415"
          image={post.img}
          alt="img"
        />
        <div className={styles.body}>
          {post.content}
        </div>
      </div>
    </>
  );
}

export default PostDetails;
