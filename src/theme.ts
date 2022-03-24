import { createTheme } from '@mui/material/styles';
import { brown, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: brown[500],
    },
    secondary: {
      main: grey[300],
    },
  },
});

export default theme;
