import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { STATIC_HOST, THUMBNAIL_URL } from '../../../constants';
import { Box } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  roots: {
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover > img': {
      transform: 'scale(2)',
    },
    '& > img': {
      transition: '-webkit-transform .5s ease',
    },
  },
}));
ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_URL;
  const classes = useStyles();
  return (
    <Box className={classes.roots}>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
