import { Box, Grid, IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import UserChip from "./components/UserChip";

interface layoutProps {
  className?: string;
  children: JSX.Element[];
}

export default function UserLayout({ children, className }: layoutProps) {
  const classes = useStyles();
  return (
    <Box className={clsx(className, classes.root)}>
      <header>
        <Box>
          <Grid container>
            <Grid item xs={3} md={6}>
              <Box display="flex">
                <Box>
                  <IconButton>
                    <ArrowBackIos
                      className={classes.buttonText}
                      fontSize="small"
                      color="secondary"
                    />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton>
                    <ArrowForwardIos
                      className={classes.buttonText}
                      fontSize="small"
                      color="secondary"
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={9} md={6} className={classes.user}>
              <UserChip />
            </Grid>
          </Grid>
        </Box>
      </header>
      <main>{children}</main>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  buttonText: {
    color: theme.palette.text.primary,
  },
  user: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
