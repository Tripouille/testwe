import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Tabs, Tab, useMediaQuery } from '@mui/material';
import { FrontOfficeRoutes } from '../../utils/constants';

const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:400px)');

  return (
    <AppBar position="sticky">
      <Tabs
        centered
        value={pathname === '/' ? FrontOfficeRoutes.BOOKS : pathname}
        textColor="secondary"
        indicatorColor="secondary"
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        <Tab
          value={FrontOfficeRoutes.BOOKS}
          label="Books"
          onClick={() => navigate(FrontOfficeRoutes.BOOKS)}
          data-cy="nav-item"
        />
        <Tab
          value={FrontOfficeRoutes.CHARACTERS}
          label="Characters"
          onClick={() => navigate(FrontOfficeRoutes.CHARACTERS)}
          data-cy="nav-item"
        />
        <Tab
          value={FrontOfficeRoutes.FAVORITE_CHARACTERS}
          label="Favorite characters"
          onClick={() => navigate(FrontOfficeRoutes.FAVORITE_CHARACTERS)}
          data-cy="nav-item"
        />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
