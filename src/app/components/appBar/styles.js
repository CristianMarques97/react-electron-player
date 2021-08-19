import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    "-webkit-app-region": "drag",
    width: "75%",
    display: "flex",
    padding: 2,
  },
  icon: {
    borderRadius: 25,
    marginLeft: theme.spacing(1),
  },
  frameMenuBox: {
    display: "flex",
    justifyContent: "flex-end",
    width: "25%",
  },
  frameMenuItems: {
    borderRadius: 0,
  },
}));
