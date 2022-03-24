import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './Pages/Books';
import NotFound from './Pages/NotFound';
import { FrontOfficeRoutes } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={FrontOfficeRoutes.HOME} element={<Books />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
