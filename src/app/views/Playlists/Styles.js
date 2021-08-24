import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  playlistContainer: {
    padding: theme.spacing(2),
  },
  playlistLogo: {
    width: "100%",
  },
  text: {
    fontFamily: "sansProRegular",
  },
  grey: {
    color: theme.palette.grey.A100,
  },
  inProgress: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100% !important",
    height: "100% !important",
    zIndex: 10,
    backgroundColor: "black",
    opacity: 0.5,
  },
  inProgressItens: {
    fontSize: 20,
  },
}));
