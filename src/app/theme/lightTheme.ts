import { createTheme } from "@material-ui/core";

const lightTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#f00',
            light: 'f50',
            dark: 'c00'
        }
    }
})

export default lightTheme