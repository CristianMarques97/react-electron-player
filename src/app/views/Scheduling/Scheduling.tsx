import { Box, Fab, Typography } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import useStyles from "./Styles";

export default function SchedulingView() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography>{text}</Typography>
      </Box>
      <Box className={classes.playBox}>
        <Fab color="primary">
          <PlayArrow />
        </Fab>
        <Typography className={classes.playText}>
          Sexta-feira, 25 de Junho de 2021
        </Typography>
      </Box>
    </Box>
  );
}

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor, turpis sed blandit tincidunt, libero massa vehicula nulla, laoreet sollicitudin turpis diam vitae ipsum. Sed quis enim sed massa volutpat facilisis. Donec quam risus, egestas sed velit sed, volutpat ultricies mauris. Integer imperdiet non dui rhoncus gravida. Aenean in lorem et turpis consequat facilisis. Ut vulputate ornare tristique. Curabitur sed interdum ex, eu euismod purus. Sed gravida purus a sem placerat convallis. Mauris id venenatis felis. Curabitur eu lorem tristique, placerat nisi id, rhoncus enim. Mauris condimentum velit nec cursus maximus. Proin finibus felis sit amet rhoncus pulvinar.";
