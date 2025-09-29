import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CircularProgress, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Try } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const Products = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([])


  const getCategories = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/categories')
      setCategories(response?.data)
      console.log(response)

    } catch (err) {
      console.log(err)
      setError(err.message || "Something went wrong");
      
    } finally {
      setLoading(false);
    }
  }

  const showProducts = async (url) => {
    try {
      const response = await axios.get(url)
      console.log(response)
      setProducts(response.data.products)

    } catch (err) {
      console.log(err)
      setError(err.message || "Something went wrong");

    }
    console.log(url)
  }

  useEffect(() => {
    getCategories();
  }, []);
  // console.log('cat', categories);

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {categories.map((catData) => (
            <Button onClick={() => showProducts(catData?.url)} variant="contained">{catData.name}</Button>
          ))}

        </Grid>



        <Grid container spacing={2}>
          {products.map((productsData) => (
            <Grid size={12}>
              {productsData.data}
            </Grid>

          ))}
        </Grid>

      </Box>

    </div>
  )
}

export default Products
