import React, { useState } from 'react'
import './css/Join.css'
import { TeamBox } from '../components/TeamBox'
import { DropdownButton, Dropdown }  from 'react-bootstrap';
import { InputBox } from '../components/InputBox'
import PersonAvatar from '../images/personAvatar.png'
import VenmoAvatar from '../images/venmoAvatar.png'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import forwardArrow from '../images/forwardArrow.png'
import Select from 'react-select'

function Join() {

  const [data, setData] = useState([{}])

  // // Fetch backend
  // useEffect(() => {
  //   fetch("/join").then(
  //     res => res
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  

  const [addName, setAddName] = useState('')
  const handleNameChange = (inputValue) => {
    setAddName(inputValue)
  }

  const [addTeamName, setAddTeamName] = useState('')
  const handleTNChange = (inputValue) => {
    setAddTeamName(inputValue)
    console.log(inputValue)
  }

  const [addVenmo, setAddVenmo] = useState('')
  const handleVenmoChange = (inputValue) => {
    setAddVenmo(inputValue)
  }

  const handleSubmit = () => {
    fetch('/allset', {
      method: 'POST',
      body: JSON.stringify({
        name: addName,
        teamName: options[addTeamName.value].label,
        venmo: addVenmo
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message => console.log(message))

    console.log('Forms Submitted')
  }

  const inputTest = [["0","Team 1", "Eli", "Alexis","G","G","G","G","G","G","G","G"], ["1","Team 2", "Kendall", "Ava"]]
  
  const filtered = inputTest.filter(function(value, index, arr){
    return value.length < 10;
  })
  //const inputTest = []

  const options = filtered.map((number) => ({value: number[0] , label: number[1]}))

  // inputTest.members.map((member, i) => (
  //   optionstest.push({value: {i}, label: {member}})
  // ))

  
  
  
  
  // const options = [

  //   // ELI: Make sure the values start from 0 so you can
  //   //      easily index options with options[addTeamName.value]

  //   ///change options so it gets the team names that are in the sheet in a loop

  //   { value: "0", label: 'Team Bitch' },
  //   { value: '1', label: 'Synergy' },
  //   { value: '2', label: 'Shahab\'s Hair' },
  //   { value: '4', label: 'dsasd\'s Hair' },
  //   { value: '4', label: 'Shahaboidsjsadojdsa' },
  //   { value: '5', label: 'aOIJDOASDJIAD' },
  //   { value: '6', label: 'cmon' },
  //   { value: '7', label: 'Shoot' },
  // ]

  return (
    <>
      <div className="titles2">
        <h1>Join a Team</h1>
        <p>Only join a team you have permission to join into</p>
      </div>

      {options.length == 0 &&
      <div className="team-subheader">
        <p>Sorry, no teams to join.</p>
        <Link to='/register' >
          <MDBBtn color="red" className = "btn-create">CREATE TEAM</MDBBtn>
        </Link>
      </div>}


      {options.length > 0 &&
      <div className="input-section">
        <div className="input-boxes">
          <InputBox type="text" name="JoinTeamName" avatar={PersonAvatar} title="FULL NAME" userInput={addName} onFormChange={handleNameChange}>Enter your full name</InputBox>
          <InputBox type="text" name="JoinVenmo" avatar={VenmoAvatar} title="YOUR VENMO" userInput={addVenmo} onFormChange={handleVenmoChange}>Enter your venmo username</InputBox>
        </div>
        <div className="drop-down-section">
          <p className="team-select-title">SELECT YOUR TEAM</p>
          <div className="row-section">
            <div className="select-dropdown">
              <Select onChange={handleTNChange} autosize={true} options={options} />
            </div>
          </div>
        </div>
      </div>}


      {/* Continue Button */}
      {options.length > 0 &&
      <div className="join-team-btn-div">
        <Link to={{
          pathname: "/allset",
          state: { name: addName } // <-- not working
          }}>
          <MDBBtn onClick={handleSubmit} className="join-team-btn" color="amber">
            JOIN TEAM
            <img className="arrow" src={forwardArrow} alt="Forward Arrow" width="18px"/>
          </MDBBtn>
        </Link>
      </div>}

      {options.length > 0 &&
      <div className="team-subheader">
        <p>See registered teams below.</p>
      </div>}
    
      {/* make this a loop */}
      <div className="team-boxes">
        {inputTest.map((number, i) => (
          <TeamBox key={i} teamName={number[1]} headColor="blue" members={number.slice(2)}/>))}
        {/* <TeamBox teamName="Team Bitch" headColor="blue" members={["Eli", "Alexis"]}/>
        <TeamBox teamName="Synergy" headColor="red" members={["Ava", "Orange", "Nah"]}/>
        <TeamBox teamName="Shahab's Hair" headColor="green" members={["Cmon"]}/> */}
      </div>
    </>
  )
}

export default Join
