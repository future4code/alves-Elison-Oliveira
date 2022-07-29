import { ThemeProvider } from "@material-ui/core/styles";
import Router from "./routes/Routes";
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
