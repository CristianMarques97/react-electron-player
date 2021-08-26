import { ButtonBase, makeStyles, Typography } from '@material-ui/core'

interface MenuButtonProps {
  onItemClick: () => void
  activated: boolean
  children: any
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'sansProRegular',
    fontSize: theme.typography.h2.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
}))

export default function MenuButton({
  onItemClick,
  activated,
  children,
}: MenuButtonProps) {
  const classes = useStyles()
  return (
    <ButtonBase
      className={classes.root}
      onClick={onItemClick}
      color={activated ? 'textPrimary' : 'textSecondary'}
    >
      <Typography
        className={classes.text}
        color={activated ? 'textPrimary' : 'textSecondary'}
      >
        {children}
      </Typography>
    </ButtonBase>
  )
}
