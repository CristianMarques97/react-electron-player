import { Button, makeStyles } from "@material-ui/core";

interface SubmitButtonProps {
  text: string;
  onclick: () => void;
  color?: "inherit" | "primary" | "secondary" | "default";
}
export default function SubmitButton({
  text,
  onclick,
  color,
}: SubmitButtonProps) {
  const classes = useStyles();
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
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 12,
    borderRadius: 40,
    fontFamily: "sansProRegular",
  },
}));
