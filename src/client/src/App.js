import React, { useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CheckIn from './pages/CheckIn';
import AllSet from './pages/AllSet';
import { LoadingSpinner } from 'video-react';

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
        }
    )
  }, [])

  return (
    <>

      <div>
        {(typeof data.members === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div>

      <br/>

      <CheckIn/>
      <AllSet/>
    </>
  );
}

export default App;
