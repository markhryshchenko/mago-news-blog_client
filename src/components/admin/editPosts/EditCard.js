import styles from "../admin.module.css";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deletePosts } from "../../../services/postsServices";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function EditCard({ post }) {
  /* ---===Snackbar===--- */
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.flex}>
          {/* <img className={styles.img} src={post.img} alt="img" /> */}

          <CardMedia
            sx={{
              borderRadius: 2,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            component="img"
            height="100"
            image={post.img}
            alt="img"
          />

          <div className={styles.card_title}>{post.title}</div>

          <div>
            <Link to={`/editPage/${post.id}`}>
              <Button
                sx={{ mr: 1, mb: 1, mt: 2 }}
                size="small"
                variant="outlined"
                startIcon={<EditIcon />}
              >
                edit
              </Button>
            </Link>
            <Button
              sx={{ mb: 1, mt: 2 }}
              size="small"
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => {
                deletePosts(post.id);
                handleClick();
              }}
            >
              delete
            </Button>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          You deleted post "{post.title}"!
        </Alert>
      </Snackbar>
    </>
  );
}

export default EditCard;
