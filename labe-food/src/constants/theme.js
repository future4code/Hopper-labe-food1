import { createTheme } from '@mui/material';
import { primaryColor, neutralColor } from './colors';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            '-apple-system',
        ].join(','),
    },
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "black"
        },

        secondary: {
            main: neutralColor,
            contrastText: 'black',
            
        },
      

    }
})

export default theme
