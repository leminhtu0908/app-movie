import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from '../../../../Api/categoryApi';
import { makeStyles } from '@material-ui/core/styles';
FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  roots: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#000',
  },
  menu: {
    padding: 0,
    margin: 0,
    '& > li': {
      listStyle: 'none',
      marginTop: theme.spacing(1),
      '&:hover': {
        color: 'blue',
        cursor: 'pointer',
      },
    },
  },
}));
function FilterByCategory(props) {
  const { onChange } = props;
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const listCate = await categoryApi.getAll();
        setCategoryList(
          listCate.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failed to get all categories', error);
      }
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <div>
      <Box className={classes.roots}>
        <Typography textAlign="center" variant="subtitle2">
          DANH MỤC SẢN PHẨM
        </Typography>
        <ul className={classes.menu}>
          {categoryList.map((category) => (
            <li onClick={() => handleCategoryClick(category)} key={category.id}>
              <Typography variant="body2">{category.name}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default FilterByCategory;
