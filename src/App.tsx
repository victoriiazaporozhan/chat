import { ThemeProvider } from "@mui/material/styles";
import { theme } from './constants/theme';
import { LoginPage } from "./pages/LoginPage";

import "./styles/main.scss";

export const App = () => (
  <ThemeProvider theme={theme}>
    <LoginPage />
  </ThemeProvider>
);
