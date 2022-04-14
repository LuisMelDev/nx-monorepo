import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;