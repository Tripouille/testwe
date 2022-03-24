import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './Pages/Books';
import Characters from './Pages/Characters';
import NotFound from './Pages/NotFound';
import { FrontOfficeRoutes } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={FrontOfficeRoutes.HOME} element={<Books />} />
        <Route path={FrontOfficeRoutes.CHARACTERS} element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
