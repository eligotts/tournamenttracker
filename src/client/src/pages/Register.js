import React, { useState } from 'react'
import forwardArrow from '../images/forwardArrow.png'
import './css/Register.css'
import Art from '../images/registrationArt.png'
import { Link } from "react-router-dom";
import { InputBox } from '../components/InputBox'

import { MDBBtn } from 'mdb-react-ui-kit';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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

  //Might have to do a different one for each input box
  const [addName, setAddName] = useState('')
  const handleNameChange = (inputValue) => {
    setAddName(inputValue)
  }

  const [addTeamName, setAddTeamName] = useState('')
  const handleTNChange = (inputValue) => {
    setAddTeamName(inputValue)
  }

  const [addVenmo, setAddVenmo] = useState('')
  const handleVenmoChange = (inputValue) => {
    setAddVenmo(inputValue)
  }

  const handleFormSubmit = () => {
    fetch('/allset', {
      method: 'POST',
      body: JSON.stringify({
        name: addName,
        teamName: addTeamName,
        venmo: addVenmo
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message => console.log(message))

    console.log('Forms Submitted')
  }

  return (
    <>

      {/* <img className="art" src={Art} alt="" width="150px"/> */}

      <div className="popandbody">

        <div className="body">

          {/* Title with subheading */}
          <div className="titles">
            <h1>Create a Team</h1>
            <p>Please enter your information to register</p>
          </div>

          {/* Input Boxes */}
          <div className="inputs">
            <InputBox type="text" name="TeamName" avatar={PersonAvatar} title="FULL NAME" userInput={addName} onFormChange={handleNameChange} >Enter your full name</InputBox>
            <InputBox type="text" name="CaptainName" avatar={PersonAvatar} title="TEAM NAME" userInput={addTeamName} onFormChange={handleTNChange} >Create your team name</InputBox>
            <InputBox type="text" name="Venmo" avatar={VenmoAvatar} title="YOUR VENMO" userInput={addVenmo} onFormChange={handleVenmoChange}> Enter your venmo username</InputBox>
          </div>

          {/* Continue Button */}
          <div className="continueButton">
            <Link to='/allset'>
              <MDBBtn onClick={handleFormSubmit} color="amber">
                CONTINUE
                <img className="arrow" src={forwardArrow} alt="Forward Arrow" width="18px"/>
              </MDBBtn>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckIn;
