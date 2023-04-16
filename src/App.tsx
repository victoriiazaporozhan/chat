import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { theme } from './constants/theme';
import { routes } from "./constants/routes";

import "./styles/main.scss";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      {routes.map(({path, element}) => <Route key={path} path={path} element={element} />)}
    </Routes>
  </ThemeProvider>
);
