import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
