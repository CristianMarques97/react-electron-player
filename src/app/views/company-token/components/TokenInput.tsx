import { TextField } from "@material-ui/core";

interface TokenInputProps {
  value: string;
  onChange: (value: string) => void;
  tabIndex?: number;
  autoFocus?: boolean;
}
export default function TokenInput({
  value,
  onChange,
  tabIndex,
  autoFocus,
}: TokenInputProps) {
  const onTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChange(event.target.value.replaceAll(/\D/g, ""));
  };
  return (
    <TextField
      autoFocus={autoFocus}
      tabIndex={tabIndex}
      variant="filled"
      value={value}
      onChange={onTextChange}
      inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
    />
  );
}
