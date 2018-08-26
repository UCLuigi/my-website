import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

class Experience extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={0} justify="center">
          <Grid item md={11}>
            <Paper
              square
              elevation={0}
              style={{ backgroundColor: "rgb(227,227,227)" }}
            >
              <Grid container spacing={0} justify="center">
                <Grid item md={12}>
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="August 2017 - present"
                      iconStyle={{
                        background: "#4EC0F4",
                        color: "#fff"
                      }}
                      icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Code Instructor
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        The Coder Shool
                      </h4>
                      <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="June 2017 - August 2017"
                      iconStyle={{
                        background: "#4EC0F4",
                        color: "#fff"
                      }}
                      icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Software Developer
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Focus LCA
                      </h4>
                      <p>
                        Creative Direction, User Experience, Visual Design, SEO,
                        Online Marketing
                      </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="August 2016 - May 2017"
                      iconStyle={{
                        background: "#4EC0F4",
                        color: "#fff"
                      }}
                      icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Mentor
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        TechStart
                      </h4>
                      <p>User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="August 2016 - May 2017"
                      iconStyle={{
                        background: "#4EC0F4",
                        color: "#fff"
                      }}
                      icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Academic Intern
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        UC Berkeley
                      </h4>
                      <p>User Experience, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="August 2014 - May 2018"
                      iconStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff"
                      }}
                      icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        UC Berkeley
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Cognitive Science w/ Computer Science minor
                      </h4>
                      <p>Creative Direction, Visual Design</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="June 2011 - May 2014"
                      iconStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff"
                      }}
                      icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        College of Alameda
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        Liberal Arts AA
                      </h4>
                      <p>Graduated w/ Highest Honors</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="August 2010 - June 2014"
                      iconStyle={{
                        background: "rgb(233, 30, 99)",
                        color: "#fff"
                      }}
                      icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        Alameda Science & Technology Institute
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        HS Diploma
                      </h4>
                      <p>Creative Direction, Visual Design</p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Experience;
