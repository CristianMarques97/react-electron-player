import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        padding: theme.spacing(6),
        paddingBottom: theme.spacing(8),
        paddingTop: theme.spacing(6),
        height: '100vh',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
          },
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        borderRadius: 0,
        padding: theme.spacing(4),
        maxWidth: 520
    },
    topSpacing: {
        paddingTop: theme.spacing(4)
    },
    logoBox: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        maxWidth:  '100%',
        maxHeight: '100%',
        display: 'block',
    },
    boxTitle: {
       
    },
    title: {
        textAlign: 'center',
        fontSize: theme.typography.h6.fontSize,
    },
    separator: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    boxHelper: {
        padding: theme.spacing(2),
    },
    helper: {
        textAlign: 'center'
    },
}))