import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  quantity: {
    textAlign: 'left',
    marginLeft: '16px',
    fontWeight: 'bold',
  },
}));
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};
const schema = yup.object().shape({
  quantity: yup
    .number()
    .min(1, 'Please enter at least 1')
    .required('Please enter a quantity')
    .typeError('Please enter number'),
});

function AddToCartForm({ onSubmit = null }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (values) => {
    console.log({ values });
    reset();
  };
  const hasError = errors.quantity;
  const [value, setValue] = useState(1);
  const classes = useStyles();
  return (
    <div>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography className={classes.quantity}>Số lượng</Typography>
        <Grid container spacing={1}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <IconButton onClick={() => setValue(Number.parseInt(value) - 1)}>
              <RemoveCircleOutlineIcon />
            </IconButton>

            <TextField
              value={value}
              size="small"
              variant="outlined"
              error={!!hasError}
              type="number"
              name="quantity"
              {...register('quantity')}
              helperText={errors.quantity?.message}
            />
            <IconButton onClick={() => setValue(Number.parseInt(value) + 1)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </Grid>
        <Box sx={{ mt: 5, mb: 2 }}>
          <Button type="submit" color="primary" variant="contained">
            Add to cart
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default AddToCartForm;
