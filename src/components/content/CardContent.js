import styles from "./content.module.css";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { LabelsContext, PostsContext } from "../../context/context";

import { Link } from "react-router-dom";
import { getOneLabelOfPost } from "../../services/labelsServices";

function CardContent({ post }) {
 const [label, setLabel] = React.useState([]);
  
  useEffect(() => { 
    const id = post.label_id;
    async function fetchLabel(id) {
      const data = await getOneLabelOfPost(id);
      setLabel(data);
    }
    fetchLabel(id);
  }, [post.label_id]);
   
  return (
    <div>
      <Link value={post.id} to={`/post/${post.id}`}>
        <div className={styles.link}>
          <CardMedia
            component="img"
            height="228"
            image={post.img}
            alt="img"
            sx={{
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
          <div className={styles.card__content}>
            <div className={styles.label}>
              <span>{label.name}</span>
            </div>
            <div className={styles.title}>{post.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardContent;
