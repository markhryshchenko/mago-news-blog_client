import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteLabel, editLabel } from "../../services/labelsServices";
import { useForm } from "react-hook-form";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Labels({ label, deleteLabelToContext,editLabelToContext }) {
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
  /* ---===Edit Dialog===--- */
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["id"] = label.id;
    editLabel(data, data.id)
    //editLabelToContext(data, data.id)
   
  }

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText value={label.name} primary={label.name} />
        <Button
          sx={{ mr: 1 }}
          size="small"
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={handleClickOpenDialog}
          disabled
        >
          edit
        </Button>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            Enter a new value for the label "{label.name}"
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
             
              <TextField
                {...register("name", { required: true })}
                autoFocus
                margin="dense"
                id="name"
                label="Edit label"
                type="text"
                fullWidth
                variant="standard"
              />
              {errors.name && <span>This field is required</span>}
            </DialogContent>
            <DialogActions>
              <Button
                type="submit"
                onClick={() => {
                  handleCloseDialog();
                }}
              >
                Edit
              </Button>
              <Button color="error" onClick={handleCloseDialog}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        <Button
          size="small"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteLabel(label.id);
            deleteLabelToContext(label.id)
            handleClick();
          }}
        >
          delete
        </Button>
      </ListItemButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          You deleted label {label.name}!
        </Alert>
      </Snackbar>
    </ListItem>
  );
}

export default Labels;
