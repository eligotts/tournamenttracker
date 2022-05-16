import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './css/CreateJoin.css'
import SigmaNu from '../images/sigmaNu.png'
import StJude from '../images/stJude.png'

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

function CreateJoin() {

  const [basicModal, setBasicModal] = useState(true);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
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
                  <p>On May 29th, Sigma Nu will be hosting a philanthropic volleyball tournament on Clark Street Beach. All proceeds will go to St. Jude Children's Research Hospital.</p>
                  <p>Each team member should register with this link.</p>

                  <p className="subheader">Team Rules</p>
                  <ul>
                    <li>Maximium limit for number of team members on the court is 6, but there can be up to 2 additional subs to total a team of 8.</li>
                    <li>Games will go to 15 points, single elimination.</li>
                    <li>Each team requires at least 2 guys and at least 2 girls.</li>
                    <li>The bracket will contain 16 teams.</li>
                  </ul>

                  <br/>
                  <p className="bold">Come back to this link on game day for live scores, standings, and more!</p>
                  <br/>
                  <p>Close this tab to either create a team or join one!</p>

                </MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn className="close-btn" color='amber' onClick={toggleShow}>
                    Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>

        <div className="snu-div2">
          <img src={SigmaNu} className="snu-logo" alt="logo" />
        </div>

        <div className="title">
          <h1>Sigma Nu</h1>
          <h2>Volleyball Tournament</h2>
        </div>

        <div className="btns">
          <Link to='/api/register' >
            <MDBBtn color="red" className = "btn-create">CREATE TEAM</MDBBtn>
          </Link>

          <Link to='/api/join'>
            <MDBBtn color="amber" className = "btn-join">JOIN TEAM</MDBBtn>
          </Link>
        </div>

        <div className="redbull-div">
          <p className="redbull">In Partnership with </p>
          <p className="redbull2">RedBull</p>
        </div>

        <div className="st-jude">
          <a target="_blank" rel="noreferrer" href="https://fundraising.stjude.org/site/TR/Challenge/Events?fr_id=138518&pg=entry"><img src={StJude} width="150px" alt="logo" /></a>
        </div>
    </>
  )
}

export default CreateJoin
