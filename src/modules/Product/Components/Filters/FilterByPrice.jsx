import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const useStyles = makeStyles((theme) => ({
  pricefilter: {
    borderTop: '1px solid #ccc',
    textAlign: 'left',
    padding: theme.spacing(2),
  },
  range: {
    marginTop: '12px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginLeft: '4px',
      marginRight: '4px',
      fontWeight: 'bold',
      fontSize: '12px',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice(props) {
  const { onChange } = props;
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
  };
  const handleSubmitReset = () => {
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <div>
      <Box className={classes.pricefilter}>
        <Typography variant="subtitle2" color="black" textAlign="center">
          GIÁ
        </Typography>
        <Box className={classes.range}>
          <TextField variant="standard" name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
          <span>
            <HorizontalRuleIcon />
          </span>
          <TextField variant="standard" name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
        </Box>
        <Box className={classes.button}>
          <Button variant="outlined" color="primary" onClick={handleSubmit}>
            Áp dụng
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSubmitReset}>
            Reset
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default FilterByPrice;
