import { Box, Divider } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import ApplicationRoutes from '../../../constants/enums/AplicationRoutes'
import MenuButton from './components/MenuButton/MenuButton'
import useStyles from './Styles'

export default function MainPageMenu() {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()

  const setPage = (router: string) => {
    history.push(router)
  }

  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.menu}>
          <Box className={classes.menuItem}>
            <MenuButton
              onItemClick={() => setPage(ApplicationRoutes.SCHEDULING)}
              activated={
                history.location.pathname === ApplicationRoutes.SCHEDULING
              }
            >
              {t('Agendamento')}
            </MenuButton>
          </Box>
          <Box className={classes.menuItem}>
            <Divider className={classes.divider} orientation="vertical" />
          </Box>
          <Box className={classes.menuItem}>
            <MenuButton
              onItemClick={() => setPage(ApplicationRoutes.PLAYLIST)}
              activated={
                history.location.pathname === ApplicationRoutes.PLAYLIST
              }
            >
              {t('Playlist')}
            </MenuButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
