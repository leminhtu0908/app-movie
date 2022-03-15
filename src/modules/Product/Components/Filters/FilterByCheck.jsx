import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const useStyles = makeStyles((theme) => ({
  pricefilter: {
    borderTop: '1px solid #ccc',
    textAlign: 'left',
    padding: theme.spacing(2),
  },
  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    '& > li': {
      margin: 0,
      marginTop: theme.spacing(1),
    },
  },
}));
FilterByCheck.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};
FilterByCheck.defaultProps = {
  filters: {},
};

function FilterByCheck(props) {
  const { onChange, filters } = props;
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <div>
      <Box className={classes.pricefilter}>
        <Typography variant="subtitle2" color="black" textAlign="center">
          Dịch Vụ
        </Typography>
        <Box className={classes.range}>
          <ul className={classes.list}>
            {[
              { value: 'isPromotion', label: 'Có khuyến mãi' },
              { value: 'isFreeShip', label: 'Miễn phí vận chuyển' },
            ].map((service) => (
              <li key={service.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Boolean(filters[service.value])}
                      onChange={handleChange}
                      name={service.value}
                      color="primary"
                    />
                  }
                  label={service.label}
                />
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </div>
  );
}

export default FilterByCheck;
