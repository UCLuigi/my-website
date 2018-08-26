import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const styles = theme => ({});

function Interests(props) {
  const { classes, theme } = props;

  return (
    <React.Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item md={11}>
          <Paper style={{ backgroundColor: "#white" }} square elevation={0}>
            <Typography>Interests</Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(styles, { withTheme: true })(Interests);
