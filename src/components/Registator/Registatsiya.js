import React from 'react'
import { signInWithGoogle } from "../filebase/config";
import F from './Regist.module.css'
import googleicon from "./googleicon.jpg";
const Registatsiya = () => {
  return (
    <div className={F.background}>
      <button onClick={signInWithGoogle} className={F.btn}>
        <strong>Sign In with Google </strong>
        <img style={{ width: `25px`, height: `25px` }} src={googleicon} />
      </button>
    </div>
  )
}

export default Registatsiya






