import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    padding: 12,
    borderRadius: 40,
    fontFamily: 'sansProRegular',
  },
}))

interface SubmitButtonProps {
  text: string
  onclick: () => void
  color?: 'inherit' | 'primary' | 'secondary' | 'default'
}

export default function SubmitButton({
  text,
  onclick,
  color,
}: SubmitButtonProps) {
  const classes = useStyles()
  return (
    <Button
      className={classes.button}
      fullWidth
      variant="contained"
      color={color}
      onClick={onclick}
    >
      {text}
    </Button>
  )
}

SubmitButton.defaultProps = {
  color: '',
}
