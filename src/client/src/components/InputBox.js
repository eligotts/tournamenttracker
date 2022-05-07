import React from 'react';
import './css/InputBox.css'

export const InputBox = ({
  children,
  type,
  avatar,
  title
}) => {

  return (
    <>

      <div className="boxAndText">
        <p>{title}</p>
        <div className="box">
          <img className="avatar" src={avatar} alt="Icon" width="20px" height="20px"/>
          <input className="input" type={type} placeholder={children}/>
        </div>
      </div>
    </>
  )
};
