import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  button: {
    '& .MuiButton-label': {
      fontFamily: 'roboto',
    },
    '& .MuiButton-contained.Mui-disabled': {
      fontWeight: '600',
      backgroundColor: '#EAEAEA',
      color: '#747474',
    },
    '& .MuiButton-contained': {
      backgroundColor: '#016FFF',
      color: 'white',
    //   height: '35px',
    //   width: '80%',
      textTransform: 'upercase',
      marginRight: 16.35,
    },
  },
}));

export { useStyles as default, useStyles };