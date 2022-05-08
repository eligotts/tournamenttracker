import React, { useState } from 'react'
import forwardArrow from '../images/forwardArrow.png'
import './css/Register.css'
import Art from '../images/registrationArt.png'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { motion } from 'framer-motion'

import { MDBBtn } from 'mdb-react-ui-kit';

// Import avatars for check-in boxes
import PersonAvatar from '../images/personAvatar.png'
import VenmoAvatar from '../images/venmoAvatar.png'

function CheckIn() {

  // Determines if button will be shown depending on screen size
  /*const [button, setButton] = useState(true);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };*/

  // Whenever screen is resized, showButton() is called
  //window.addEventListener('resize', showButton);

  return (
    // <motion.div
    //   initial={{opacity: 0}}
    //   animate={{opactiy: 1}}
    //   exit={{opacity: 0}}>
    <>

      <img className="art" src={Art} alt="" width="150px"/>
      <div className="body">

        {/* Title with subheading */}
        <div className="titles">
          <h1>Register</h1>
          <p>Please enter your information to register</p>
        </div>

        {/* Input Boxes */}
        <div className="inputs">
          <InputBox type="text" name="TeamName" avatar={PersonAvatar} title="TEAM NAME">Enter a name to call your team</InputBox>
          <InputBox type="text" name="CaptainName" avatar={PersonAvatar} title="TEAM CAPTAIN">Enter your name</InputBox>
          <InputBox type="number" name="MembersNum" avatar={PersonAvatar} title="# OF TEAM MEMBERS (INCLUDING YOU)">Enter a number</InputBox>
          <InputBox type="text" name="Venmo" avatar={VenmoAvatar} title="YOUR VENMO">Enter your venmo username</InputBox>
        </div>

        {/* Continue Button */}
        <div className="continueButton">
          <Button>
            CONTINUE
            <img className="arrow" src={forwardArrow} alt="Forward Arrow" width="18px"/>
          </Button>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  )
}

export default CheckIn;
