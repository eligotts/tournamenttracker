import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom'
import CheckIn from './pages/CheckIn';
import AllSet from './pages/AllSet';
import './App.css'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/").then(
      res => res
    ).then(
      data => {
        setData(data)
        console.log(data)
        }
    )
  }, [])

  return (
    <>

      {/*DISPLAY BACKEND*/}
      <div>
        {(typeof data.members === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div>

      <div className="font-link">
        <Router>
          <Routes>
            <Route path='/' element={<CheckIn/>}/>
            <Route path='/allset' element={<AllSet/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
