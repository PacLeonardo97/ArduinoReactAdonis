import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

const StyledButton = ({ disabled, type, text, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.button}>
      <Button size="medium" {...rest} type={type} variant="contained" disabled={disabled}>
        {text}
      </Button>
    </div>
  );
};

StyledButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

StyledButton.defaultProps = {
  disabled: false,
  type: 'button',
};

export default StyledButton;