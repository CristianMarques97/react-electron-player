import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  playBox: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    display: "flex",
  },
  text: {
    fontFamily: "sansProRegular",
  },
  grey: {
    color: theme.palette.grey.A100,
  },
  playText: {
    paddingLeft: theme.spacing(2),
    alignSelf: "center",
  },
}));
