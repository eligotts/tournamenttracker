import React from 'react';
import './css/InputBox.css'

export const InputBox = ({
  children,
  type,
  avatar,
  title,
  name,
  userInput,
  onFormChange,
  handleFormSubmit
}) => {
  const handleChange = (event) => {
    onFormChange(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleFormSubmit()
  }

  return (
    <>

      <div className="boxAndText">
        <p>{title}</p>
        <div className="box">
          <img className="avatar" src={avatar} alt="Icon" width="20px" height="20px"/>
          <form onSubmit={handleSubmit}>
              <input className="inp" required value={userInput} onChange={handleChange} type={type} name={name} autocomplete="off" placeholder={children}/>
          </form>
        </div>
      </div>
    </>
  )
};
