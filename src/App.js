import './App.scss';
import Home from './Components/Home/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header />
    <Home />
    </>
  );
}

export default App;
