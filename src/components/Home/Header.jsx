import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
const Header = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appbar" position="static">
        <Toolbar>
          <Typography className="appbar__header" variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'default' }}>
            THE MOVIES
          </Typography>
          <button className="appbar__btn" onClick={handleClick}>
            Đăng nhập
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
