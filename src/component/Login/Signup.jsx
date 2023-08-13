import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className="bg-signup">
      <div className="frame-signup">

        <div className="signin">
        <form method='post'>
          
          <label className="inputbox">USERNAME</label><br/>
          <input type='text' className='inputname'/><br/>
          
          <label className="inputbox">PASSWORD</label><br/>
          <input type='password' className='inputpwd'/><br/>
          
            <button className='signin-user'>
            <input type="submit" value="SIGN IN" className='signin-submit'/>
            </button>
        </form>
        </div>

        <div className="signup">
          <div className="text-title-signup">
            <h1>ยังไม่มีบัญชีใช่ไหม?</h1>
            <p>สร้างบัญชีใหม่</p>
            <button className='signup-user'>
              <Link to="/signupcomponent" className='signup-button'>SIGN UP</Link>
            </button>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Signup