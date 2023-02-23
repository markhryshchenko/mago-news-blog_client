import React, { useEffect } from "react";
import styles from "./admin.module.css";
import { LabelsContext, PostsContext } from "../../context/context";
import { useForm } from "react-hook-form";
import Labels from "./Labels";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { addLabel } from "../../services/labelsServices";

import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { addPosts } from "../../services/postsServices";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function AddPost() {
  let {labels} = React.useContext(LabelsContext);
  let posts = React.useContext(PostsContext);
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
 /*  const addPostToContext = (newPost) => {
    setLabels([...labelss, newLabel]);
  }; */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["id"] = posts.length + 1;
     //addPostToContext(data);
    addPosts(data);
    handleClick();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          {...register("title", { required: true })}
          id="outlined-textarea"
          label="Title"
          fullWidth
          multiline
          size="small"
          sx={{ mb: 3 }}
        />{" "}
        {errors.title && (
          <span className={styles.error}>This field is required</span>
        )}
      </div>
      <div>
        <TextField
          {...register("content", { required: true })}
          id="outlined-multiline-static"
          label="Enter your content"
          multiline
          fullWidth
          rows={4}
          sx={{ mb: 3 }}
        />{" "}
        {errors.content && (
          <span className={styles.error}>This field is required</span>
        )}
      </div>
      <TextField
        {...register("img", { required: true })}
        sx={{ mr: 5 }}
        id="outlined-basic"
        label="Image source"
        variant="outlined"
        size="small"
      />{" "}
      {errors.img && (
        <span className={styles.error}>This field is required</span>
      )}
      <TextField
        {...register("label_id", { required: true })}
        id="outlined-select-currency"
        select
        label="Label"
        size="small"
        defaultValue="1"
        helperText="Please select label"
      >
        {errors.label_id && (
          <span className={styles.error}>This field is required</span>
        )}
        {labels.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      <div>
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          color="success"
          sx={{ mt: 3 }}
        >
          add new post
        </Button>
        <Link to={`/editList`}>
          <Button
            type="text"
            variant="contained"
            startIcon={<EditIcon />}
            color="primary"
            sx={{ mt: 3, ml: 3 }}
            disabled
          >
            edit posts
          </Button>
        </Link>
      
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You added new post!
        </Alert>
      </Snackbar>
    </form>
  );
}

export default AddPost;
