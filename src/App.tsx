import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/const";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
