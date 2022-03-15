import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../components/Home/Footer';
import Login from './components/Login/Login';
import '../../components/Home/styles.scss';
import Register from './components/Register/Register';
import { Link } from 'react-router-dom';
const Index = () => {
  const [login, setLogin] = useState(true);
  const handleClick = () => {
    setLogin(!login);
  };
  return (
    <div className="homepage">
      <div className="homepage__login">
        <Box>
          <Link to="/" className="homepage__title">
            THE MOVIES
          </Link>
        </Box>
        {login ? <Login handleClick={handleClick} /> : <Register handleClick={handleClick} />}

        <Footer />
      </div>
    </div>
  );
};

export default Index;
