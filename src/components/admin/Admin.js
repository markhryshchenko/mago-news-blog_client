import Aside from "../aside/Aside";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import React, { useEffect } from "react";
import styles from "./admin.module.css";
import { ExContext, LabelsContext } from "../../context/context";
import { useForm } from "react-hook-form";
import Labels from "./Labels";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { addLabel } from "../../services/labelsServices";
import MenuItem from '@mui/material/MenuItem';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AddPost from "./AddPost";
import updateContextLabels from "../../App"
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Admin() {
  let {labels,addLabelToContext,deleteLabelToContext,editLabelToContext} = React.useContext(LabelsContext);
  //let {labs, addLabelToContext} = React.useContext(ExContext);
  const [open, setOpen] = React.useState(false);
  const [labelss, setLabels] = React.useState([]);

  useEffect(() => {
    setLabels(labels);
  }, [labels]);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  
  const currencies = [labels.map
    /* {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
     */
  ];

  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["id"] = labels.length + 1;
    addLabel(data);
    
    handleClick();
    addLabelToContext(data);
    reset()
    console.log(data);
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
            <div className={styles.title}>Add post</div>
            <AddPost />
          
            <div className={styles.title}>Add label</div>
            <div className={styles.forms}>
              <div className={styles.center}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 550,
                    bgcolor: "background.paper",
                    border: "1px solid grey",
                    borderRadius: 2,
                    margin: 0,
                  }}
                >
                  <nav aria-label="secondary mailbox folders">
                    <List>
                      {labels.map((item) => (
                        <Labels label={item} editLabelToContext={editLabelToContext} deleteLabelToContext={deleteLabelToContext} key={item.id} />
                      ))}
                    </List>
                  </nav>
                </Box>
                <form
                  className={styles.form__addLabel}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {errors.name && (
                    <span className={styles.error}>This field is required</span>
                  )}
                  <TextField
                    {...register("name", { required: true })}
                    id="outlined-basic"
                    label="new label"
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<AddIcon />}
                    color="success"
                  >
                    add new label
                  </Button>
                  {/* <input {...register("name", { required: true })} /> */}
                  {/* errors will return when field validation fails  */}
                </form>
              </div>
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

export default Admin;
