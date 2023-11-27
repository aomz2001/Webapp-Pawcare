import React, { useState } from 'react'
import './SignupCo.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignupComponent() {

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const addSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5050/signup', {
        signup_uname: username,
        signup_fullname: fullname,
        signup_email: email,
        signup_phone: phone,
        signup_pwd: password,
        signup_address: address
      });

      const result = response.data;
      if (result.status === "ok") {
        alert("Sign up Success");
        window.location = '/signup'
      } else {
        alert("Sign up Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div className="frame-bgup">
        <div className="bg-signupCo">
          <div className="frame-sup">
            <form onSubmit={addSignup}>
              <table>
                <tr>
                  <td>
                    <label>Username</label><br />
                    <input type='text' name='username' required
                      onChange={(event) => {
                        setUsername(event.target.value)
                      }} />
                  </td>
                  <td>
                    <label>ชื่อ-นามสกุล</label><br />
                    <input type='text' name='name' required
                      onChange={(event) => {
                        setFullname(event.target.value)
                      }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>อีเมล</label><br />
                    <input type='text' name='email' required
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }} />
                  </td>
                  <td>
                    <label>เบอร์โทรศัพท์</label><br />
                    <input type='text' name='phone' required
                      onChange={(event) => {
                        setPhone(event.target.value)
                      }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>รหัสผ่าน</label><br />
                    <input type='password' name='pwd' required
                      onChange={(event) => {
                        setPassword(event.target.value)
                      }} />
                  </td>
                  <td>
                    <label>ยืนยันรหัสผ่าน</label><br />
                    <input type='password' name='pwd' required
                      onChange={(event) => {
                        setConfirmPwd(event.target.value)
                      }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>ที่อยู่</label><br />
                    <textarea name='suggest' rows='3' cols='15' required
                      onChange={(event) => {
                        setAddress(event.target.value)
                      }} />
                  </td>
                </tr>
              </table>
              <input type="checkbox" value="agree" required />ฉันได้อ่านและยอมรับ
              <Link to="/conprivacy" >ข้อตกลงและเงื่อนไขการใช้งานของ PAWCARE</Link>
              <input type="submit" value="SIGN UP" className='signup-submit' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupComponent