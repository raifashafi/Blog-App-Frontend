import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<SignUp/>}/>
   <Route path='/SignIn' element={<SignIn/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
