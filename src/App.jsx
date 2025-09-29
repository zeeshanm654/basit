import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import UseState from "./pages/UseState";
import UseEffectPage from "./pages/UseEffectPage";
import Practice from "./pages/Paractice";
import GridPage from "./pages/GridPage";
import PostDetails from "./pages/postDetails";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Practice App
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/products">
              Shop
            </Button>
            <Button color="inherit" component={Link} to="/usestate">
              Use State
            </Button>
            <Button color="inherit" component={Link} to="/useeffect">
              Use Effect
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
             <Button color="inherit" component={Link} to="/grid">
              Grid Example
            </Button>
            <Button color="inherit" component={Link} to="/Practice">
              Practice
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Page Routes */}
      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="/postdetails" element={<PostDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Practice" element={<Practice />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
