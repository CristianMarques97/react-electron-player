import { Box } from "@material-ui/core";

interface layoutProps {
  className?: string;
  children: JSX.Element[];
}
export default function BlankLayout({ children, className }: layoutProps) {
  return <Box className={className}>{children}</Box>;
}
