import { Box, makeStyles, Typography } from '@material-ui/core'
import { Alarm } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  inProgress: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#00000095',
  },
  itensBox: {},
  inProgressItens: {
    fontSize: 20,
  },
}))

export default function PlaylistOverlay() {
  const classes = useStyles()
  return (
    <Box className={classes.inProgress}>
      <Box className={classes.itensBox}>
        <Alarm fontSize="large" color="primary" />
        <Typography className={classes.inProgressItens} color="primary">
          Preparando
        </Typography>
        <Typography className={classes.inProgressItens} color="primary">
          Playlist
        </Typography>
      </Box>
    </Box>
  )
}
