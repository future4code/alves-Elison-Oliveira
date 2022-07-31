import { ThemeProvider } from "@mui/material/styles";
import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./routes/Router";
import theme from "./constants/theme";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
