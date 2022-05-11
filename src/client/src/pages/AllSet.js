import React, { useState, useEffect} from 'react';
import './css/AllSet.css';
import SigmaNu from '../images/sigmaNu.png'
import { useLocation } from "react-router-dom"
import { Checkmark } from 'react-checkmark'


export const AllSet = ({
  name
}) => {

  const [data, setData] = useState([{}])

  // Fetch backend
  // useEffect(() => {
  //   fetch("/allset").then(
  //     res => res
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opactiy: 1 }}
    //   exit={{ opacity: 0 }}>
        <>

      <header className="header">

        <Checkmark className="check" color='#a89b75'/>

        <div className="text">
          <h1>You're all set, {name}.</h1>
          <p>Save the date</p>
          <div className="dateText">
            <h2>May 29</h2>
          </div>

          <div className="subtext2">
            <p>If you created a team, your friends can not join your team from the home page.</p>
          </div>
        </div>

        <div className="snu-div">
          <img src={SigmaNu} className="snu-logo" alt="logo" />
        </div>

      </header>

      {/* DISPLAY BACKEND */}
      {/* <div>
        {(typeof data.arr === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.arr.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div> */}

    {/* </motion.div> */}
    </>
  )
}

export default AllSet;
