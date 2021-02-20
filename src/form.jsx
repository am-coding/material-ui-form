import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "8px",
    backgroundColor: "#7392d2"
  },
  input: {
    borderRadius: "8px"
  },
  textfield: {
    background: "rgb(243, 245, 251)",
    borderRadius: "8px"
  }
}));

function Form() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h5">Complaint Form</Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                autoComplete="id"
                name="id"
                variant="outlined"
                required
                fullWidth
                id="id"
                label="ID"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                autoComplete="room-number"
                name="room-number"
                variant="outlined"
                required
                fullWidth
                id="room-number"
                label="Room Number"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                autoComplete="Hostel Name"
                name="hostel-name"
                variant="outlined"
                required
                fullWidth
                id="hostel-name"
                label="Hostel Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                required
                multiline
                rows={5}
                fullWidth
                name="Complaint"
                label="Complaint topic (Room, Hostel, Other)"
                id="complaint"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                required
                multiline
                rows={5}
                fullWidth
                name="describe-complaint"
                label="Describe your complaint"
                id="describe-complaint"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                required
                fullWidth
                name="subject-complaint"
                label="Subject of your complaint"
                id="subject-complaint"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Form;
