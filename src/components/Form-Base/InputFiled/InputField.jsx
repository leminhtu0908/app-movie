import { TextField } from '@mui/material';
import React from 'react';

const TextFiled = () => {
  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
    </div>
  );
};

export default TextFiled;
