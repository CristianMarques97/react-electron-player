import { Box, Grid, IconButton, makeStyles } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'
import UserChip from './components/userChip/UserChip'
import MainPageMenu from './components/mainPageMenu/MainPageMenu'

interface layoutProps {
  className?: string
  children: JSX.Element[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  buttonText: {
    color: theme.palette.text.primary,
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export default function UserLayout({ children, className }: layoutProps) {
  const classes = useStyles()
  const history: any = useHistory()

  return (
    <Box className={clsx(className, classes.root)}>
      <header>
        <Box>
          <Grid container>
            <Grid item xs={3} md={6}>
              <Box display="flex">
                <Box>
                  <IconButton onClick={() => history.goBack()}>
                    <ArrowBackIos
                      className={classes.buttonText}
                      fontSize="small"
                      color="secondary"
                    />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton onClick={() => history.goForward()}>
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
      <Box>
        <MainPageMenu />
      </Box>
      <main>{children}</main>
    </Box>
  )
}

UserLayout.defaultProps = {
  className: null,
}
