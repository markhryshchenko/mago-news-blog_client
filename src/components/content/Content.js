import styles from "./content.module.css";
import React, { useEffect } from "react";
import { useContext } from "react";
import { LabelsContext, PostsContext } from "../../context/context";

import CardContent from "./CardContent";
import { Button } from "@mui/material";
import { getOneLabelOfPost } from "../../services/labelsServices";

function Content() {
  
  const dataPosts = useContext(PostsContext);
  

 
  return (
    <main className={styles.main}>
     
      <div className={styles.content}>
        <div className={styles.content_grid}>
      
          {dataPosts.map((post) => {
            return <CardContent post={post} key={post.id} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Content;
