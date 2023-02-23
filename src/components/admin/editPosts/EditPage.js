import React, { useContext, useEffect } from "react";
import styles from "./editPage.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link, useParams } from "react-router-dom";
import { LabelsContext, PostsContext } from "../../../context/context";
import Header from "../../header/Header";
import Aside from "../../aside/Aside";
import Footer from "../../footer/Footer";
import { Controller, useController, useForm } from "react-hook-form";
import { MenuItem, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Add";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EditPage() {
  let {labels} = React.useContext(LabelsContext);
  let posts = React.useContext(PostsContext);
  const [post, setPost] = React.useState({});
  const [label, setLabel] = React.useState({});
  const dataLabels = useContext(LabelsContext);
  const dataPosts = useContext(PostsContext);
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  useEffect(() => {
    setPost(dataPosts.find((item) => parseInt(id) === item.id));
  }, [dataPosts, id]);
  useEffect(() => {
    setLabel(dataLabels.find((item) => parseInt(id) === item.id));
  }, [dataLabels, id]);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["id"] = post.id;
    handleClick();
    console.log(data);
    //addPostToContext(data);
    //addPosts(data);
  };

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h2>Edit page</h2>
          </div>
          <div className={styles.body}>
            <div className={styles.content}>
              <Link to={`/editList`}>
                <Button
                  type="text"
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  color="warning"
                  sx={{ mt: 3, mb: 5 }}
                >
                  back to list of posts
                </Button>
              </Link>
              {/* <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <TextField
                    {...register("title", { required: true })}
                    id="outlined-textarea"
                    label="Title"
                    fullWidth
                    multiline
                    size="small"
                    sx={{ mb: 3 }}
                    value={post.title}
                  />{" "}
                  {errors.title && (
                    <span className={styles.error}>
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <TextField
                    {...register("content", { required: true })}
                    id="outlined-multiline-static"
                    label="Enter your content"
                    multiline
                    fullWidth
                    rows={10}
                    value={post.content}
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
                  variant="outlined"
                  size="small"
                  value={post.img}
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
                  helperText="Please select label"
                >
                  {labels.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                  {errors.label_id && (
                    <span className={styles.error}>
                      This field is required!
                    </span>
                  )}
                </TextField>
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<EditIcon />}
                    color="primary"
                    sx={{ mt: 3 }}
                  >
                    edit post
                  </Button>
                </div>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    You added new post!
                  </Alert>
                </Snackbar>
              </form> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...register("title", { required: true })}
                        label="Title"
                        fullWidth
                        multiline
                        size="small"
                        sx={{ mb: 3 }}
                        defaultValue={post.title}
                        {...field}
                      />
                    )}
                    name="title"
                    control={control}
                  />
                  {errors.title && (
                    <span className={styles.error}>
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...register("content", { required: true })}
                        label="Enter your content"
                        multiline
                        fullWidth
                        rows={10}
                        sx={{ mb: 3 }}
                        defaultValue={post.content}
                        {...field}
                      />
                    )}
                    name="content"
                    control={control}
                  />{" "}
                  {errors.content && (
                    <span className={styles.error}>
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <Controller
                    render={({ field }) => (
                      <TextField
                        {...register("img", { required: true })}
                        sx={{ mr: 5 }}
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                      
                        {...field}
                      />
                    )}
                    name="img"
                    control={control}
                    defaultValue={post.content}
                  />{" "}
                  {errors.content && (
                    <span className={styles.error}>
                      This field is required!
                    </span>
                  )}
                  <Controller
                    name="label_id"
                    render={({ field }) => (
                      <TextField
                        {...register("label_id", { required: true })}
                        id="outlined-select-currency"
                        select
                        label="Label"
                        size="small"
                        helperText="Please select label"
                      >
                        {labels.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.name}
                          </MenuItem>
                        ))}
                        {errors.label_id && (
                          <span className={styles.error}>
                            This field is required!
                          </span>
                        )}
                      </TextField>
                    )}
                    control={control}
                    defaultValue=""
                  />
                </div>

                <input type="submit" />
              </form>
            </div>
            {/*  <div className={styles.grid__box}>
            </div> */}
          </div>
        </div>
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default EditPage;
