import React from 'react';
import './css/InputBox.css'

export const InputBox = ({
  children,
  type,
  title
}) => {

  return (
    <>
      <div className="boxAndText">
        <p>{title}</p>
        <div className="box">
          <form method = "POST" action = "/allset">
              <input className="input" type={type} placeholder={children}/>
          </form>
        </div>
      </div>
    </>
  )
};
