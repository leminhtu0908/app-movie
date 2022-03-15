import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((them) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    padding: 0,
    margin: them.spacing(2, 0),
    listStyle: 'none',
    '& > li': {
      margin: 0,
      padding: them.spacing(1),
    },
  },
}));
const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Miễn phí vận chuyển ',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_lte;
      delete newFilters.salePrice_gte;
      return newFilters;
    },
    onToggle: null,
  },
  /* {
    id: 4,
    getLabel: (filters) => Object.keys(filters).map((category) => `${category.name}`),
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).map((category) => category.name),
    isRemovable: true,
    onRemove: (filters) => {
      const { newFilters } = { ...filters };
      delete newFilters.category.id;
      return newFilters;
    },
    onToggle: null,
  }, */
];
FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();
  const visible = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <div>
      <Box component="ul" className={classes.root}>
        {visible.map((x) => (
          <li key={x.id}>
            <Chip
              label={x.getLabel(filters)}
              color={x.isActive(filters) ? 'primary' : 'default'}
              clickable={!x.isRemovable}
              size="small"
              onClick={
                x.isRemovable
                  ? null
                  : () => {
                      if (!onChange) return;

                      const newFilters = x.onToggle(filters);
                      onChange(newFilters);
                    }
              }
              onDelete={
                x.isRemovable
                  ? () => {
                      if (!onChange) return;

                      const newFilters = x.onRemove(filters);
                      onChange(newFilters);
                    }
                  : null
              }
            />
          </li>
        ))}
      </Box>
    </div>
  );
}

export default FilterViewer;
