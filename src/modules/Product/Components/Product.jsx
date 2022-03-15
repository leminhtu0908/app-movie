import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { STATIC_HOST, THUMBNAIL_URL } from '../../../constants';
Product.propTypes = {
  product: PropTypes.object,
};
Product.defaultProps = {
  product: {},
};

function Product(props) {
  const { product } = props;
  const history = useHistory();
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_URL;
  const handleClick = () => {
    history.push(`products/${product.id}`);
  };
  return (
    <div>
      <Box onClick={handleClick} textAlign="left" padding={1}>
        <Box padding={1}>
          <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>
        <Typography component="span" color="#000" variant="body2">
          {product.name}
        </Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="18px" fontWeight="bold" color="#000">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}
        </Typography>
      </Box>
    </div>
  );
}

export default Product;
