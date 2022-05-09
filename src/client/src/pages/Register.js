import React, { useState } from 'react'
import forwardArrow from '../images/forwardArrow.png'
import './css/Register.css'
import Art from '../images/registrationArt.png'
import { Link } from "react-router-dom";
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { motion } from 'framer-motion'

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

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

  const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    // <motion.div
    //   initial={{opacity: 0}}
    //   animate={{opactiy: 1}}
    //   exit={{opacity: 0}}>
    <>

      <img className="art" src={Art} alt="" width="150px"/>

      <div className="popandbody">

        <div className="body">

          <div className="custom-modal">
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                      <MDBModalTitle>Volleyball Tournament Registration</MDBModalTitle>

                    {/* <MDBBtn className='btn-close' color='blue' onClick={toggleShow}></MDBBtn> */}
                  </MDBModalHeader>
                  <MDBModalBody>

                    <p className="subheader">Welcome!</p>
                    <p>On May 29th, Sigma Nu will be hosting a philanthropic volleyball tournament on South Beach. All proceeds will go to St. Jude Children's Research Hospital.</p>
                    <p>Each team member should register with this link.</p>

                    <p className="subheader">Team Rules</p>
                    <ul>
                      <li>Maximium limit for number of team members on the court is 6, but there can be up to 2 additional subs to total a team of 8.</li>
                      <li>Games will go to 15 points, single elimination.</li>
                      <li>Each team requires at least 2 guys and at least 2 girls.</li>
                      <li>The bracket will contain 16 teams.</li>
                    </ul>

                    <br/>
                    <p>Close this tab to register!</p>

                  </MDBModalBody>

                  <MDBModalFooter>
                    <MDBBtn color='amber' onClick={toggleShow}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>

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
            <Link to='/allset' className = 'btn-continue'>
              <MDBBtn color="amber">
                CONTINUE
                <img className="arrow" src={forwardArrow} alt="Forward Arrow" width="18px"/>
              </MDBBtn>
            </Link>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </>
  )
}

export default CheckIn;
