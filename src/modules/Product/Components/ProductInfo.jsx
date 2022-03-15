import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

ProductInfo.propTypes = {
  product: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
  roots: {
    padding: theme.spacing(2),
    color: '#000',
    textAlign: 'left',
    borderBottom: '1px solid #ccc',
  },
  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },

  name: {},
  description: {
    margin: theme.spacing(2, 0),
  },
  salePrice: {
    fontSize: '20px',
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },
  promotionPercent: {
    fontSize: '12px',
  },
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box className={classes.roots}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salePrice)}
        </Box>
        {product.promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
              {`- ${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
