import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function UserChip() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={8} className={classes.user}>
          <Box className={classes.text}>
            <Typography>Sestini - Shopping Ibirapuera</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.buttonBox}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            
          >
            {t("Sair")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light + "35",
    padding: 5,
    borderRadius: 60,
    maxWidth: 460,
    width: "100%",
  },
  user: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: theme.palette.secondary.dark,
    minWidth: 120,
    borderRadius: 60,
    fontFamily: "sansProRegular",
    color: theme.palette.grey.A100,
  },
  buttonBox: {
    display: "flex",
    justifyContent: "flex-end",
   
  },
  text: {
    padding: theme.spacing(1),
    fontFamily: "sansProRegular",
    color: theme.palette.grey.A100,
  },
}));
