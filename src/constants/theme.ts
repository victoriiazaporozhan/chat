import { createTheme } from "@mui/material/styles";

const colors = {
  black: '#000000',
  darkGray: '#121212',
  lightGray: '#4c4c4c',
  pink: '#f5c7f7',
  violet: '#a393eb'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.violet
    }
  }
})