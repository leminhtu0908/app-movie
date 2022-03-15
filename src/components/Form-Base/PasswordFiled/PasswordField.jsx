import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

const PasswordField = () => {
  const [values, setValues] = useState({
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <FormControl sx={{ width: '100%' }} variant="outlined">
        <InputLabel htmlFor="password">Password *</InputLabel>
        <OutlinedInput
          id="password"
          required
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <BiHide /> : <BiShow />}
              </IconButton>
            </InputAdornment>
          }
          label="Password *"
        />
      </FormControl>
    </div>
  );
};

export default PasswordField;
