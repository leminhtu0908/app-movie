import { Box, Container, Grid, Skeleton, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Route, Router, Switch, useRouteMatch } from 'react-router-dom';
import AddToCartForm from '../Components/AddToCartForm';
import ProductInfo from '../Components/ProductInfo';
import ProductMenu from '../Components/ProductMenu';
import ProductThumbnail from '../Components/ProductThumbnail';
import ProductDescription from '../Components/ProductDescription';
import ProductAdditional from '../Components/ProductAdditional';
import ProductReviews from '../Components/ProductReviews';
import useProductDetail from '../hooks/useProductDetail';
DetailPage.propTypes = {};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#000',
  borderRight: '1px solid #cccc',
  borderRadius: '0px',
}));

function DetailPage(props) {
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  const { product, loading } = useProductDetail(productId);
  const handleAddToCartFormSubmit = (formValue) => {
    console.log('Form Value', formValue);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <Item>
                {loading ? (
                  <Stack>
                    <Skeleton variant="rectangular" width={215} height={215} />
                  </Stack>
                ) : (
                  <ProductThumbnail product={product} />
                )}
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <ProductInfo product={product} />
                <AddToCartForm onSubmit={handleAddToCartFormSubmit} />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <ProductMenu />
              <Switch>
                <Route path={url} exact>
                  <ProductDescription product={product} />
                </Route>
                <Route path={`${url}/additional`} exact>
                  <ProductAdditional />
                </Route>
                <Route path={`${url}/reviews`} exact>
                  <ProductReviews />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default DetailPage;
