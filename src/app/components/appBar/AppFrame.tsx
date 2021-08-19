import { Box, Button } from "@material-ui/core";
import { Close, Maximize, Minimize } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../../assets/2idIcon.jpg";
import React from "react";

export default function AppFrame() {
  const classes = useStyles();
  let window: Electron.BrowserWindow | null = null;

  const minimizeWindow = () => {
    const { remote } = require("electron");
    console.log(remote?.BrowserWindow);

    window = remote?.BrowserWindow?.getFocusedWindow();
    window?.minimize();
  };

  const maximizeWindow = () => {
    const { remote } = require("electron");
    window = remote?.BrowserWindow?.getFocusedWindow();
    if (window?.isMaximized) {
      window.unmaximize();
    } else {
      window?.maximize();
    }
  };
  return (
    <React.Fragment>
      <Box className={classes.root} position="fixed">
        <Box className={classes.appBar}>
          <img className={classes.icon} src={logo} width={28} />
        </Box>
        <Box className={classes.frameMenuBox}>
          <Box className={classes.frameMenuItems} onClick={minimizeWindow}>
            <Button className={classes.frameMenuItems} variant="text">
              <Minimize />
            </Button>
          </Box>
          <Box className={classes.frameMenuItems} onClick={maximizeWindow}>
            <Button className={classes.frameMenuItems} variant="text">
              <Maximize />
            </Button>
          </Box>
          <Box className={classes.frameMenuItems} onClick={minimizeWindow}>
            <Button
              className={classes.frameMenuItems}
              variant="text"
              color="primary"
            >
              <Close color="action" />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box height={40} />
    </React.Fragment>
  );
}
