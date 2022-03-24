import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Tabs, Tab, useMediaQuery } from '@mui/material';
import { FrontOfficeRoutes } from '../../utils/constants';

const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:300px)');

  return (
    <AppBar position="sticky">
      <Tabs
        centered
        value={pathname}
        textColor="secondary"
        indicatorColor="secondary"
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        <Tab
          value={FrontOfficeRoutes.HOME}
          label="Books"
          onClick={() => navigate(FrontOfficeRoutes.HOME)}
        />
        <Tab
          value={FrontOfficeRoutes.CHARACTERS}
          label="Characters"
          onClick={() => navigate(FrontOfficeRoutes.CHARACTERS)}
        />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
