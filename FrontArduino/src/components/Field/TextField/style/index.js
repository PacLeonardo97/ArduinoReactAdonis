import { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    fontFamily: 'Poppins',
    '& .MuiInputBase-input': {
      paddingRight: 36,
      fontSize: 14,
      fontFamily: 'Poppins',
      '&::placeholder': {
        fontFamily: 'Poppins',
      },
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontWeight: 600,
      color: 'red',
      fontFamily: 'Poppins',
    },
    '& .MuiInput-underline': {
      borderBottomColor: '#6E3F8C',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#6E3F8C',
      },
      '&:hover fieldset': {
        borderColor: '#6E3F8C',
      },
    },
    '& .MuiFormLabel-root': {
      fontFamily: 'Poppins',
    },
    '& .MuiInputLabel-shrink': {
      fontSize: 13,
    },
  },
})(TextField);

export default memo(CssTextField);
