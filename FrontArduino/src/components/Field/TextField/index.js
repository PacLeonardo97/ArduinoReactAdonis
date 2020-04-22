import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@material-ui/styles';
import CssTextField from './style';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const CustomizedInputs = ({
  input: { name, onChange, value, ...restInput },
  meta,
  disabled,
  ...rest
}) => {
  const IconError = styled(ErrorIcon)({
    color: '#EA4D2A',
    fontSize: '26.5px',
    marginTop: '20.75px',
    display: 'inline-block',
    position: 'absolute',
    right: '6%'
  });

  const classes = useStyles();
  const { InputProps = {} } = rest;
  const { min, max, maxLength } = InputProps;
  const restInputProps = { min, max, maxLength };

  Object.keys(restInputProps).forEach(
    key => restInputProps[key] === undefined && delete restInputProps[key]
  );

  const { submitError, dirtySinceLastSubmit, error, touched } = meta;
  const showError = ((submitError && !dirtySinceLastSubmit) || error) && touched;

  return (
    <div className={classes.root} noValidate style={{ position: 'relative', textAlign: 'right' }}>
      {showError && <IconError />}
      <CssTextField
        className={classes.margin}
        fullWidth
        variant="outlined"
        autoComplete="off"
        disabled={disabled}
        {...rest}
        name={name}
        helperText={showError ? error || submitError : undefined}
        error={showError}
        inputProps={{
          ...restInput,
          ...restInputProps
        }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

CustomizedInputs.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    checked: PropTypes.bool,
    multiple: PropTypes.bool
  }).isRequired,
  meta: PropTypes.shape({
    visited: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    submitError: PropTypes.string,
    dirtySinceLastSubmit: PropTypes.bool,
    warning: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  }).isRequired
};

CustomizedInputs.defaultProps = {
  disabled: false
};

export default memo(CustomizedInputs);
