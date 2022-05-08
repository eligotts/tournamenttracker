import React, { useState, useEffect} from 'react';
import './css/AllSet.css';
import SigmaNu from '../images/sigmaNu.png'
import { Checkmark } from 'react-checkmark'
import { motion } from 'framer-motion'

function AllSet () {

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

  // Get
  function get_name() {
    return "Alexis"
  }

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opactiy: 1 }}
    //   exit={{ opacity: 0 }}>
        <>

      <header className="header">

        <Checkmark color='#a89b75'/>

        <div className="text">
          <h1>You're all set, {get_name()}.</h1>
          <p>Save the date</p>
          <div className="dateText">
            <h2>May 29</h2>
          </div>
        </div>

        <div className="snu-div">
          <img src={SigmaNu} className="snu-logo" alt="logo" />
        </div>

        <div className="subtext">
            <p>Questions? Text Alexis Robles at 781-666-9422</p>
        </div>

      </header>

      {/*DISPLAY BACKEND*/}
      {/* <div>
        {(typeof data.update_sheet === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div> */}

    {/* </motion.div> */}
    </>
  )
}

export default AllSet;
