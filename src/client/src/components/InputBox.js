import React from 'react';
import './css/InputBox.css'

export const InputBox = ({
  children,
  type,
  avatar,
  title,
  name
}) => {

  return (
    <>

      <div className="boxAndText">
        <p>{title}</p>
        <div className="box">
          <img className="avatar" src={avatar} alt="Icon" width="20px" height="20px"/>
          <form method = "POST" action = "/allset">
              <input className="inp" type={type} name={name} autoComplete="off" placeholder={children}/>
          </form>
        </div>
      </div>
    </>
  )
};
