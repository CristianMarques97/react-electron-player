import { Box, Grid, IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

interface layoutProps {
  className?: string;
  children: JSX.Element[];
}
export default function UserLayout({ children, className }: layoutProps) {
  return (
    <Box className={className}>
      <header>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Box>
                <IconButton>
                  <ArrowBackIos color="secondary" />
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <ArrowForwardIos color="secondary" />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </header>
      <main>{children}</main>
    </Box>
  );
}
