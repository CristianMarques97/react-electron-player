import { Box, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import PlaylistService from "../../services/api/PlaylistService";
import PlaylistOverlay from "./components/overlay/Overlay";
import useStyles from "./Styles";

export default function PlaylistView() {
  const classes = useStyles();
  const [playlist, setPlaylist] = React.useState<any[]>();

  const getPlaylist = async () => {
    const { data: playlists } = await PlaylistService.getCompanyPlaylist();
    setPlaylist(playlists);
  };

  React.useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={clsx(classes.text, classes.grey)}>
          {text}
        </Typography>
      </Box>
      <Box className={classes.playlistContainer}>
        <Grid container spacing={4}>
          {playlist?.map(({ image, inProgress }, i) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={image + i}>
              <Box
                textAlign="center"
                position="relative"
                maxWidth="100%"
                height="auto"
              >
                {inProgress && <PlaylistOverlay />}
                <img src={image} className={classes.playlistLogo} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor, turpis sed blandit tincidunt, libero massa vehicula nulla, laoreet sollicitudin turpis diam vitae ipsum. Sed quis enim sed massa volutpat facilisis. Donec quam risus, egestas sed velit sed, volutpat ultricies mauris. Integer imperdiet non dui rhoncus gravida. Aenean in lorem et turpis consequat facilisis. Ut vulputate ornare tristique. Curabitur sed interdum ex, eu euismod purus. Sed gravida purus a sem placerat convallis. Mauris id venenatis felis. Curabitur eu lorem tristique, placerat nisi id, rhoncus enim. Mauris condimentum velit nec cursus maximus. Proin finibus felis sit amet rhoncus pulvinar.";
