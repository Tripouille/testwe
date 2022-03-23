import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './Pages/Books';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
