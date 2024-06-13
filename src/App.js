import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<SignUp/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
