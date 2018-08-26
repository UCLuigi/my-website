import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  avatar: {
    width: 300,
    height: 300,
    margin: 50
  }
});

function About(props) {
  const { classes, theme } = props;

  return (
    <React.Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item md={11}>
          <Paper style={{ backgroundColor: "#4EC0F4" }} square>
            <Grid container spacing={0} justify="center">
              <Grid item md={8}>
                <Avatar
                  alt=""
                  src="https://s.hswstatic.com/gif/money-world-360x240.jpg"
                  className={classes.avatar}
                />
              </Grid>
              <Grid item md={8}>
                <Typography
                  style={{ color: "white" }}
                  variant="display2"
                  gutterBottom
                  align="center"
                >
                  Luis Alba
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Typography
                  style={{ color: "white" }}
                  variant="display1"
                  gutterBottom
                  align="center"
                >
                  Full Stack Developer
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Grid container spacing={0} justify="center">
                  <Grid item md={4} />
                  <Grid item md={4} />
                  <Grid item md={4} />
                </Grid>
              </Grid>
              <Grid item md={11}>
                <Typography
                  style={{ color: "white" }}
                  variant="body1"
                  gutterBottom
                  align="center"
                >
                  Welcome to my website! My name is Luis Alba. I graduated from
                  UC Berkeley in Cognitive Science with a Computer Science
                  minor. Alongside with finishing up college and obtaining my
                  degree in Computer Science, I work part-time with General
                  Motors as a Full Stack Developer, and freelance for many
                  customers building enterprise level mobile and web
                  applications.
                </Typography>
                <br />
                <br />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={11}>
          <Paper
            square
            elevation={0}
            style={{ backgroundColor: "rgb(227,227,227)" }}
          >
            <Grid container md={12}>
              <Grid item md={12}>
                <Typography
                  style={{ color: "black" }}
                  variant="display1"
                  gutterBottom
                >
                  Summary
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(About);
