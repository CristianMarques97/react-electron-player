import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Card,
} from "@material-ui/core";
import React from "react";
import Playlist from "../../model/Playlist";
import PlaylistConversor from "../../utils/PlaylistConversor";
import MusicPlayer from "./Player";

interface PlayerListViewProps {
  playlist: Playlist;
}

export default function PlaylistView({ playlist }: PlayerListViewProps) {
  const classes = useStyles();
  const [musicIndex, setMusicIndex] = React.useState(0);
  return (
    <Card className={classes.card}>
      <Box>
        <List component="nav" aria-label="mailbox folders">
          {playlist?.musics?.map(
            ({ thumbnail, name, duration, author }, index) => (
              <>
                <ListItem button onClick={() => setMusicIndex(index)}>
                  <img width={30} src={thumbnail} />
                  <ListItemText
                    className={
                      index == musicIndex ? classes.active : classes.inative
                    }
                    primary={name}
                  />
                  <ListItemText
                    style={{ textAlign: "right" }}
                    className={
                      index == musicIndex ? classes.active : classes.inative
                    }
                    primary={PlaylistConversor.seconds2Hours(
                      parseFloat(duration)
                    )}
                  />
                </ListItem>
                <Divider />
              </>
            )
          )}
        </List>
      </Box>
      <Box className={classes.player}>
        {playlist?.musics?.length && (
          <MusicPlayer
            index={musicIndex}
            musicsList={playlist.musics}
            onIndexChange={(index) => setMusicIndex(index)}
          />
        )}
      </Box>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  player: {
    paddingTop: theme.spacing(6),
  },
  active: {
    paddingLeft: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  inative: {
    paddingLeft: theme.spacing(2),
  },
}));
