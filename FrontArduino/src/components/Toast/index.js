import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';
import { CheckCircle as CheckCircleIcon, Cancel as CancelIcon, Error as ErrorIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    '& *': {
      fontFamily: 'Poppins'
    },
    '& strong': {
      color: '#3D3E43',
      fontWeight: '600',
      fontSize: 14
    },
    '& .MuiAlert-filledSuccess': {
      background: '#F1F9F6',
      border: 'solid 1px #5AB38C',
      color: '#3D3E43',
      fontSize: 14,
      fontWeight: '400',
      '& .MuiAlert-icon, & .MuiAlert-action': {
        color: '#19B98E'
      }
    },
    '& .MuiAlert-filledError': {
      background: '#FFEAEA',
      border: 'solid 1px #E65750',
      color: '#3D3E43',
      fontSize: 14,
      fontWeight: '400',
      '& .MuiAlert-icon, & .MuiAlert-action': {
        color: '#FA3F3F'
      }
    }
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast = ({ open, close, message, duration, type }) => {
  const classes = useStyles();

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={() => close()}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      className={classes.root}
    >
      <Alert
        onClose={() => close()}
        severity={type}
        style={{ borderRadius: '8px' }}
        icon={
          type === 'success' ? (
            <CheckCircleIcon />
          ) : type === 'error' ? (
            <CancelIcon />
          ) : (
            <ErrorIcon />
          )
        }
      >
        <strong>{type === 'error' ? 'Erro' : type === 'success' ? 'Sucesso' : 'Atenção'}</strong>
        <br />
        {message}
      </Alert>
    </Snackbar>
  );
};

Toast.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func.isRequired,
  message: PropTypes.array,
  duration: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

Toast.defaultProps = {
  open: false,
  message: null
};

export default Toast;