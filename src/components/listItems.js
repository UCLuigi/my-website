import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
import SchoolIcon from "@material-ui/icons/School";
import MoodIcon from "@material-ui/icons/Mood";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText style={{ color: "white" }} primary="About Me" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Experience" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Education" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <MoodIcon />
      </ListItemIcon>
      <ListItemText primary="Interests" />
    </ListItem>
  </div>
);
