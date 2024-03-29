import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, IconButton, Typography, useMediaQuery } from "@material-ui/core";
import { Hidden } from "@material-ui/core";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopWatch from "../../assets/stopwatch.svg";
import documentsAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data.json";
import roots from "../../assets/root.svg";
import automationAnimation from "../../animations/automationAnimation/data.json";
import uxAnimation from "../../animations/uxAnimation/data";
import CallToAction from "../../ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
  },
}));

function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          <Hidden mdDown>
            <Grid
              item
              style={{
                marginLeft: "-3.5em",
                marginRight: "1em",
                marginTop: "0.05em",
              }}
            >
              <IconButton
                disableRipple
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/services"
                onClick={() => props.setSelectedIndex(0)}
              >
                <img src={backArrow} alt="back to the service page" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" style={{ width: "50em" }}>
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h3">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              style={{
                marginLeft: "1em",

                marginTop: "0.05em",
              }}
            >
              <IconButton
                disableRipple
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/mobileapps"
                onClick={() => props.setSelectedIndex(2)}
              >
                <img src={forwardArrow} alt="go to the the revolution page" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        {/* -----------------------------icons----------------------------- */}
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginTop: "15em", marginBottom: "20em" }}
        >
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em", marginBottom: matchesSM ? "10em" : 0 }}
          >
            <Grid item>
              <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt="light bulb icon" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em", marginBottom: matchesSM ? "10em" : 0 }}
          >
            <Grid item>
              <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
              <img src={stopWatch} alt="light bulb icon" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em", marginBottom: matchesSM ? "10em" : 0 }}
          >
            <Grid item>
              <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="light bulb icon" />
            </Grid>
          </Grid>
        </Grid>
        {/* ------------------------------animations------------------------------  */}
        <Grid container direction={matchesMD ? "column" : "inherit"}>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems={matchesSM ? "center" : undefined}
            justifyContent="space-around"
            md
            style={{ marginBottom: matchesMD ? "10em" : 0 }}
          >
            <Grid
              item
              container
              md
              direction="column"
              style={{ maxWidth: "40em", marginBottom: matchesMD ? "10em" : 0 }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : undefined}
                >
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={documentsOptions}
                // isStopped={true}
                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md
            direction={matchesSM ? "column" : "row"}
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid item md style={{ marginBottom: matchesMD ? "10em" : 0 }}>
              <Lottie
                options={scaleOptions}
                // isStopped={true}
                style={{ maxHeight: 260, maxWidth: 280 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "40em" }}
              md
            >
              <Grid item>
                <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ----------------------------------root analysis----------------------------------  */}
        <Grid
          item
          container
          style={{ marginTop: "20em", marginBottom: "20em" }}
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <img
                alt="tree with roots"
                src={roots}
                height={matchesSM ? "300em" : "450em"}
                width={matchesSM ? "300em" : "450em"}
              />
            </Grid>
            <Grid item style={{ maxWidth: "40em" }}>
              <Typography variant="h4" align="center">
                Root-Cause Analysis
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* ---------------------------------Automation---------------------------------  */}
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            container
            style={{ marginBottom: matchesMD ? "10em" : 0 }}
            md
            justifyContent="space-around"
          >
            <Grid
              item
              container
              md
              direction="column"
              style={{ maxWidth: "40em", marginBottom: matchesMD ? "10em" : 0 }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : undefined}
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Why waste time when you don’t have to?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={automationOptions}
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>
          <Grid item md container justifyContent="space-around">
            <Grid item style={{ marginBottom: matchesMD ? "10em" : 0 }} md>
              <Lottie
                options={uxOptions}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "40em" }}
              md
            >
              <Grid item>
                <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
}

export default CustomSoftware;
