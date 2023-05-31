import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import {ReadyPcPage} from './pages/ReadyPcPage';
import {ContactPage} from './pages/ContactPage';
import { IndividualPcPage } from './pages/IndividualPcPage';
import { Layout } from './components/Layout';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='ready' element={<ReadyPcPage/>}/>
        <Route path='individual' element={<IndividualPcPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
