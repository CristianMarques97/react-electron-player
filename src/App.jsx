import {
  CircularProgress,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppFrame from "./app/components/appBar/AppFrame";
import Routes from "./app/router/index";
import { persistor, store } from "./app/store";
import darkTheme from "./app/theme/darkTheme";
import "./fonts/fonts.css";
import "./i18n";

function App() {
  const Loading = () => {
    const classes = useStyles();
    return (
      <MuiThemeProvider theme={darkTheme}>
        <AppFrame />
        <CircularProgress className={classes.loading} />
      </MuiThemeProvider>
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={darkTheme}>
            <AppFrame />
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
