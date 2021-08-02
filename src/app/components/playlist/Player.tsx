import {
  Box,
  Card,
  Fab,
  Grid,
  IconButton,
  makeStyles,
  Slider,
  Typography,
} from "@material-ui/core";
import {
  PlayArrow,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  Stop,
  VolumeDown,
  VolumeUp,
} from "@material-ui/icons";
import React from "react";
import ReactPlayer from "react-player";
import MusicEnvironment from "../../variables/MusicEnvironment";
import { Music } from "../../model/Playlist";
import PlaylistConversor from "../../utils/PlaylistConversor";

interface MusicPlayerParams {
  musicsList: Music[];
  index: number;
  onIndexChange: (index: number) => void;
}

export default function MusicPlayer({
  musicsList,
  index,
  onIndexChange,
}: MusicPlayerParams) {
  const [playing, setPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isLoop, setIsLoop] = React.useState(false);
  const playerRef: any = React.useRef();

  const setPlay = () => {
    if (index > musicsList.length) {
      onIndexChange(0);
    }
    setPlaying(!playing);
  };

  const setIndex = (next: boolean) => {
    if (next) {
      if (index >= musicsList.length - 1) {
        onIndexChange(0);
      } else {
        onIndexChange(index + 1);
      }
    } else {
      if (index === 0) {
        restartMusic();
      } else {
        onIndexChange(index - 1);
      }
    }
  };

  const setRepeat = () => {
    setIsLoop(!isLoop);
  };

  const restartMusic = () => {
    playerRef.current.seekTo(0, "seconds");
  };

  const handleVolume = (e: any, value: any) => {
    setVolume(value);
  };

  const handleProgress = (e: any, value: any) => {
    setProgress(value);
    playerRef.current.seekTo(parseFloat(value), "seconds");
  };

  const onMusicEnded = () => {
    if (index >= musicsList.length - 1) {
      setPlaying(false);
    }
    setIndex(true);
  };

  const classes = useStyles();

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        className={classes.player}
        loop={isLoop}
        url={`${MusicEnvironment.MusicRepositoryUrl}${musicsList[index].file}`}
        playing={playing}
        volume={volume}
        onDuration={(d) => setDuration(d)}
        onProgress={(p) => setProgress(p.playedSeconds)}
        onEnded={onMusicEnded}
      />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <Grid container>
              <Grid item>
                <Box>
                  <img width={50} src={musicsList[index]?.thumbnail} />
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.details}>
                  <Typography className={classes.music}>
                    {musicsList[index]?.name}
                  </Typography>
                  <Typography className={classes.author}>
                    {`${musicsList[index].album} - ${musicsList[index]?.author}`}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Grid container>
              <Grid item md={2}>
                <Box>
                  <IconButton onClick={setRepeat}>
                    <Repeat color={isLoop ? "primary" : "disabled"} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box>
                  <IconButton
                    onDoubleClick={() => setIndex(false)}
                    onClick={() => restartMusic()}
                  >
                    <SkipPrevious />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box>
                  <Fab color="primary" aria-label="play" onClick={setPlay}>
                    {playing ? <Stop /> : <PlayArrow />}
                  </Fab>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box>
                  <IconButton onClick={() => setIndex(true)}>
                    <SkipNext />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box>
                  <IconButton>
                    <Shuffle />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            spacing={2}
            direction="row"
            alignContent="center"
            alignItems="center"
            style={{ alignSelf: "center" }}
          >
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider
                value={volume}
                onChange={handleVolume}
                color="secondary"
                step={0.01}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => {
                  return `${Math.trunc(v * 100)}%`;
                }}
                max={1}
                min={0}
                aria-labelledby="continuous-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          {PlaylistConversor.seconds2Hours(progress)}
        </Grid>
        <Grid item xs={6}>
          <Slider
            value={progress}
            onChange={handleProgress}
            color="secondary"
            step={0.01}
            valueLabelDisplay="off"
            max={duration}
            min={0}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item xs={3}>
          {PlaylistConversor.seconds2Hours(duration)}
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  player: {
    display: "none",
  },
  music: {
    textAlign: "start",
    fontWeight: 800,
  },
  author: {
    textAlign: "start",
  },
  details: {
    paddingLeft: theme.spacing(1),
  },
}));
