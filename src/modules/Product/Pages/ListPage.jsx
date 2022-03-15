import { Box, Container, Grid, Pagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useEffect, useMemo, useState } from 'react';
import productApi from '../../../Api/productApi';
import FilterViewer from '../Components/Filters/FilterViewer';
import ProductFilters from '../Components/ProductFilters';
import ProductList from '../Components/ProductList';
import ProductSkeletonList from '../Components/ProductSkeletonList';
import ProductSort from '../Components/ProductSort';
import { useHistory, useLocation } from 'react-router-dom';
const queryString = require('query-string');
ListPage.propTypes = {};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();

  const [panigation, setPanigation] = useState({ page: 1, limit: 16, total: 10 });
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 16,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);

  /* const [filters, setFilters] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 16,
    _sort: queryParams._sort || 'salePrice:ASC',
  })); */
  //Call api
  useEffect(() => {
    (async () => {
      try {
        const { data, panigation } = await productApi.getAll(queryParams);
        setPanigation(panigation);
        setProductList(data);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);
  // Đồng bộ filters lên url
  /* useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  }, [history, filters]); */
  const handlePageChange = (e, page) => {
    /* setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    })); */
    const filters = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handleSortChange = (newSortValue) => {
    /* setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    })); */
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const hanledFilterChange = (newFilters) => {
    /* setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    })); */
    const filters = {
      ...queryParams,
      ...newFilters,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const setNewFilters = (newFilters) => {
    /* setFilters(newFilters); */
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Item>
                <ProductFilters filters={queryParams} onChange={hanledFilterChange} />
              </Item>
            </Grid>
            <Grid item xs={9}>
              <Item>
                <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
                <FilterViewer filters={queryParams} onChange={setNewFilters} />
                {loading ? <ProductSkeletonList length={16} /> : <ProductList data={productList} />}
                <Grid container justifyContent="center" mt={4} pb={2}>
                  <Pagination
                    onChange={handlePageChange}
                    count={Math.ceil(panigation.total / panigation.limit)}
                    page={panigation.page}
                    color="primary"
                  />
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
