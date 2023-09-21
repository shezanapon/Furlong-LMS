import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import pic from "../../public/Furlong Painting Logo.png";
import SideBar from "../../module 1/SideBar";

import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Quiz1 from "../../module 1/Quiz1";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
// const state=proxy({});

export default function Main(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [option, setOption] = React.useState(null);
  const [data, setData] = React.useState(null);

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleOption = (data) => {
    setOption(data);
    setData(data.url);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{ color: "#106786" }} />
          </IconButton>

          <Box
            variant="h6"
            noWrap
            style={{
              color: "black",
            }}
          >
            Furlong Painting Contractor Induction Program
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          {/* This drawer is for mobile responsive version */}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div>
              <Image height={59} src={pic} alt="" />
              <Divider />
              <div />

              <SideBar handleOption={handleOption} />
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div>
              <Image height={59} src={pic} alt="" />
              <Divider />
              <div />

              <SideBar handleOption={handleOption} />
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {option?.url ? (
          <div
            style={{ width: "100%", overflow: "hidden", paddingTop: "56.25%" }}
          >
            {isLoading && (
              <div>
                <center>
                  <CircularProgress />
                </center>
              </div>
            )}
            <iframe
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              onLoad={handleIframeLoad}
              frameborder="0"
              scrolling="yes"
              src={option?.url}
            ></iframe>
          </div>
        ) : (
          <Quiz1 option={option} sty />
        )}
      </main>
    </div>
  );
}
Main.propTypes = {
  window: PropTypes.func,
};
