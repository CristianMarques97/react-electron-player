import {
  CssBaseline,
  ThemeProvider,
  useTheme,
} from "@material-ui/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./app/router/routes";
import { persistor, store } from "./app/store";
import darkTheme from "./app/theme/darkTheme";
import "./i18n";

function App() {
  const theme = useTheme();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
