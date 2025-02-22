import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'


export const theme = createTheme({
    cssVariables:true,
    palette: {
        primary: {
          main: '#556cd6',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        }
    }
})