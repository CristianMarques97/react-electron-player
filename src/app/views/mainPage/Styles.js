import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
  menu: {
    display: "flex",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  menuItem: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  divider: {
    width: 3.5,
    height: "85%",
    marginTop: theme.spacing(1),
  },
}));
