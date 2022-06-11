/* eslint-disable max-len */
import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(2,0,40,0.9895308465182948) 0%, rgba(9,115,121,1) 0%, rgba(3,0,255,1) 100%)',
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(2,0,40,0.9895308465182948) 0%, rgba(9,115,121,1) 0%, rgba(3,0,255,1) 100%)',
          color: 'white',
          textAlign: 'center',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          background: 'linear-gradient(90deg, rgba(2,0,40,0.9895308465182948) 0%, rgba(9,115,121,1) 0%, rgba(3,0,255,1) 100%)',
          '&.Mui-disabled': {
            opacity: 0.5,
            color: 'white',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(2,0,40,0.9895308465182948) 0%, rgba(9,115,121,1) 0%, rgba(3,0,255,1) 100%)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, rgba(34,193,205,0.0007353283110118625) 38%, rgb(0 41 255 / 96%) 149%)',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          background: 'antiquewhite',
        },
      },
    },
  },
});

export default theme;
