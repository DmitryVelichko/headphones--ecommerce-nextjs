import React from 'react';
import Nav from '../components/Nav';
import Product from '../components/Product';
import { Box } from '@mui/material';

const product = () => {
  return (
    <div>
      <Box>
        <Nav />
        <Product />
      </Box>
    </div>
  );
};

export default product;
