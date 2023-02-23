import React, { useEffect } from "react";
import styles from "../admin.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { LabelsContext, PostsContext } from "../../../context/context";
import Header from "../../header/Header";
import Aside from "../../aside/Aside";
import Footer from "../../footer/Footer";

import EditCard from "./EditCard";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function EditList() {
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

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h2>Admin</h2>
          </div>
          <div className={styles.body}>
            <Link to={`/admin`}>
              <Button
                type="text"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                color="warning"
                sx={{ mt: 3, mb: 5 }}
              >
                back to admin panel
              </Button>
            </Link>
            <div className={styles.grid__box}>
            {posts.map((post) => (
          <EditCard post={post} key={post.id} />
        ))}
            </div>
          </div>
        </div>
        <Aside />
      </main>
      <Footer />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You added new label!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default EditList;
