import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Board Game Hoard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;