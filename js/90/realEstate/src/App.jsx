import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router';
import Header from './Header.jsx';
import BuyHome from './BuyHome.jsx';
import SellHome from './SellHome.jsx';
import HomePage from './HomePage.jsx';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header /> 
              <Outlet/> 
            </>
          }>
            <Route index element={<HomePage />} />
            <Route path= '/buy' element={<BuyHome />}/>
            <Route path= '/sell' element = {<SellHome />}/>
            {/* <Route path = '*' element ={<><p>404 - error</p></>}/> */}
            <Route path='*' element={<Navigate to="/" replace />} />

          </Route>
      </Routes>
    </BrowserRouter >
    </>
  )
}

export default App
