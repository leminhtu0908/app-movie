import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const saleDescription = DOMPurify.sanitize(product.description);
  return <div dangerouslySetInnerHTML={{ __html: saleDescription }}></div>;
}

export default ProductDescription;
