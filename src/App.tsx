import React, { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import Characters from './pages/Characters';
import FavoriteCharacters from './pages/FavoriteCharacters';
import NotFound from './pages/NotFound';
import { FrontOfficeRoutes } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={FrontOfficeRoutes.BOOKS} replace />} />
        <Route path={FrontOfficeRoutes.BOOKS} element={<Books />} />
        <Route path={FrontOfficeRoutes.CHARACTERS} element={<Characters />} />
        <Route path={FrontOfficeRoutes.FAVORITE_CHARACTERS} element={<FavoriteCharacters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
