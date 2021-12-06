import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "styled-components";
import theme from "./globalStyle/theme";
import GlobalStyles from "./globalStyle/global";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles theme={theme} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
