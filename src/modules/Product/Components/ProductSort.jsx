import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort(props) {
  const { currentSort, onChange } = props;
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <div>
      <Tabs value={currentSort} onChange={handleSortChange} aria-label="basic tabs example">
        <Tab label="Giá cao" value="salePrice:ASC" />
        <Tab label="Giá thấp" value="salePrice:DESC" />
      </Tabs>
    </div>
  );
}

export default ProductSort;
