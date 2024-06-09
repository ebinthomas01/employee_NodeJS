import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmp from './components/AddEmp';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddEmp/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
