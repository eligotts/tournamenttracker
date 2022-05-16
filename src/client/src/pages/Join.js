import React, { useState, useEffect } from 'react'
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
  useEffect(() => {
    fetch("/api/join").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  const [addName, setAddName] = useState('')
  const handleNameChange = (inputValue) => {
    setAddName(inputValue)
  }

  const [addTeamName, setAddTeamName] = useState('')
  const handleTNChange = (inputValue) => {
    setAddTeamName(inputValue)
    console.log(inputValue)
  }

  const handleSubmit = () => {
    fetch('/api/allset', {
      method: 'POST',
      body: JSON.stringify({
        name: addName,
        teamName: options[addTeamName.value].label
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message => console.log(message))

    console.log('Forms Submitted')
  }

  const filtered = data.filter(function(value, index, arr) {
    return value.length < 11;
  })

  const colors = ["blue", "indigo", "purple", "pink", "red", "green", "teal", "cyan", "blue", "indigo", "purple", "pink", "red", "green", "teal", "cyan"];

  //const inputTest = []
  const options = filtered.map((number) => ({value: number[0] , label: number[1]}))

  // inputTest.members.map((member, i) => (
  //   optionstest.push({value: {i}, label: {member}})
  // ))
  const realData = [];
  for(let i = 0; i<data.length;i++) {
    const temp = []
    for (let j=0; j<data[i].length;j++) {
      temp.push([data[i][j]])
    }
    realData.push(temp)
  }

  return (
    <>
      <div className="titles2">
        <h1>Join a Team</h1>
        <p>Only join a team you have permission to join into</p>
      </div>

      {console.log(data)}
      {console.log(options.length)}

      {options.length === 0 &&
      <div className="team-subheader">
        <p>No teams have been registered yet.</p>
        <Link to='/api/register'>
          <MDBBtn color="red" className = "btn-create">CREATE TEAM</MDBBtn>
        </Link>
      </div>}

      {options.length > 0 &&
      <div className="input-section">
        <div className="input-boxes">
          <InputBox type="text" name="JoinTeamName" avatar={PersonAvatar} title="FULL NAME" userInput={addName} onFormChange={handleNameChange}>First Last</InputBox>
        </div>
        <div className="drop-down-section">
          <p className="team-select-title">SELECT YOUR TEAM</p>
          <div className="row-section">
            <div className="select-dropdown">
              <Select onChange={handleTNChange} autosize={true} options={options} />
            </div>
            <p className="subtext3">Full teams will not appear in the drop down</p>
          </div>
        </div>
      </div>}

      {/* Continue Button */}
      {options.length > 0 &&
      <div className="join-team-btn-div">
        <Link to={{
          pathname: "/api/allset",
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
        {realData.map((number, i) => (
          <TeamBox key={i} teamName={number[1]} headColor={colors[i]} members={number.slice(3)}/>))}
      </div>
    </>
  )
}

export default Join;
