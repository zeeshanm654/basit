import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

export default function UseEffectPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log("response", response.data.products);
      setProducts(response.data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products (Axios + MUI Grid)</h2>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {products.map((prod) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={prod.id}>
            <Paper style={{ padding: "15px", textAlign: "center" }}>
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <Typography variant="h6" gutterBottom>
                {prod.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {prod.description.slice(0, 50)}...
              </Typography>
              <Typography variant="subtitle1" color="primary">
                ${prod.price}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
