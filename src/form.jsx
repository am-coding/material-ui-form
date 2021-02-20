import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
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

const hostels = ["valmiki bhavan", "gautam bhavan"];
const complaints = ["room issue", "hostel issue", "mess issue", "others"];

function Form() {
  const classes = useStyles();
  const [hostel, setHostel] = React.useState("");
  const [complaint, setComplaint] = React.useState("");

  const handleChange = (event) => {
    setHostel(event.target.value);
  };
  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h5">Complaint Form</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required={true}
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
                required={true}
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
                required={true}
                fullWidth
                id="room-number"
                label="Room Number"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%", textAlign: "left" }}
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                id="standard-select-hostel"
                select
                label="Hostel Name"
                value={hostel}
                onChange={handleChange}
                helperText="Please select your hostel name"
              >
                {hostels.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                required={true}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                required={true}
                fullWidth
                name="subject-complaint"
                label="Subject of your complaint"
                id="subject-complaint"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                style={{ width: "100%", textAlign: "left" }}
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                id="standard-select-hostel"
                select
                label="Complaint Topic"
                value={complaint}
                onChange={handleComplaintChange}
                helperText="Please select your complaint topic"
              >
                {complaints.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.textfield}
                InputProps={{
                  className: classes.input
                }}
                variant="outlined"
                required={true}
                multiline
                rows={5}
                fullWidth
                name="describe-complaint"
                label="Describe your complaint"
                id="describe-complaint"
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
