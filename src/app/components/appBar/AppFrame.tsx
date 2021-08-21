import { Box, Button } from "@material-ui/core";
import { Close, Maximize, Minimize } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../../assets/2idIcon.jpg";
import React from "react";
import MaximizeIcon from "../../utils/icons/Maximize";
import MinimizeIcon from "../../utils/icons/Minimize";

export default function AppFrame() {
  const classes = useStyles();
  const [maximizedWindow, setMaximizedWindow] = React.useState(true);

  const minimizeWindow = () => {
    const w: any = window;
    w.api.send("minimize");
  };

  const maximizeWindow = () => {
    const w: any = window;
    w.api.send("maximize");
    setMaximizedWindow(!maximizedWindow);
  };

  const close = () => {
    const w: any = window;
    w.api.send("close");
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
              {maximizedWindow ? (
                <MaximizeIcon color="action" />
              ) : (
                <MinimizeIcon color="action" />
              )}
            </Button>
          </Box>
          <Box className={classes.frameMenuItems} onClick={close}>
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
