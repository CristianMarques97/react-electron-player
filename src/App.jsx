import {
  CircularProgress,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import history from "./app/router/history";
import Routes from "./app/router/routes";
import { persistor, store } from "./app/store";
import darkTheme from "./app/theme/darkTheme";
import "./i18n";

function App() {
  const Loading = () => {
    const classes = useStyles();
    return (
      <MuiThemeProvider theme={darkTheme}>
        <CircularProgress className={classes.loading} />
      </MuiThemeProvider>
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  loading: {
    position: "fixed",
    top: "50%",
    left: "50%",
  },
}));
