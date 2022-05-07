import React, { useState } from 'react'
import { Button } from '../components/Button'
import forwardArrow from '../images/forwardArrow.png'
import './css/CheckIn.css'
import Art from '../images/checkInArt.png'
import { InputBox } from '../components/InputBox'

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
    <>
      <img className="art" src={Art} alt="" width="150px"/>
      <div className="body">

        {/* Title with subheading */}
        <div className="titles">
          <h1>Check In</h1>
          <p>Please check in to continue</p>
        </div>

        {/* Input Boxes */}
        <div className="inputs">
          <InputBox type="text" avatar={PersonAvatar} title="TEAM NAME">Enter a name to call your team</InputBox>
          <InputBox type="text" avatar={PersonAvatar} title="TEAM CAPTAIN">Enter your name</InputBox>
          <InputBox type="number" avatar={PersonAvatar} title="# OF TEAM MEMBERS (INCLUDING YOU)">Enter a number</InputBox>
          <InputBox type="text" avatar={VenmoAvatar} title="YOUR VENMO">Enter your venmo username</InputBox>
        </div>

        {/* Continue Button */}
        <div className="continueButton">
          <Button buttonStyle="btn--primary">
            CONTINUE
            <img className="arrow" src={forwardArrow} alt="Forward Arrow" width="18px"/>
          </Button>
        </div>
      </div>
    </>
  )
}

export default CheckIn;
