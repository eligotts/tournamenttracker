import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from  'react-router-dom'
import Register from './pages/Register';
import AllSet from './pages/AllSet';
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
        {/* <AnimatePresence> */}
          {/* <Router location={useLocation()} key={useLocation().pathname}> */}
          <Router>
            <div className="font-link">
              <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/allset' element={<AllSet/>}/>
              </Routes>
            </div>
          </Router>
          <Footer/>
        {/* </AnimatePresence> */}
    </>
  );
}

export default App;
