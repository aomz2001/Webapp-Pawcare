import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      signup_uname: username,
      signup_pwd: password
    };

    try {
      const response = await fetch("http://localhost:5050/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result); // Handle the response from the server

      if (result.status === "ok") {
        alert("Sign in Success");
        localStorage.setItem('token', result.token);
        window.location = '/'
      } else {
        alert("Sign in Failed");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <>
      <div className="bg-signup">
        <div className="frame-signup">

          <div className="signin">
            <form method='post' onSubmit={handleSubmit}>

              <label className="inputbox">USERNAME</label><br />
              <input type='text' className='inputname'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /><br />

              <label className="inputbox">PASSWORD</label><br />
              <input type='password' className='inputpwd'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br />

              <button className='signin-user'>
                <input type="submit" value="SIGN IN" className='signin-submit' />
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