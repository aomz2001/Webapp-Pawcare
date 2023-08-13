import React from 'react'
import './SignupCo.css'
import { Link } from 'react-router-dom'

function SignupComponent() {
  return (
    <>
    <div className="frame-bgup">
    <div className="bg-signupCo">
      <div className="frame-sup">
        <form method='post'>
          <table>
            <tr>
              <td>
                <label>Username</label><br/>
                <input type='text' name='username' required/>
              </td>
              <td>
                <label>ชื่อ-นามสกุล</label><br/>
                <input type='text' name='name' required/>
              </td>
            </tr>
            <tr>
              <td>
                <label>อีเมลล์</label><br/>
                <input type='text' name='email' required/>
              </td>
              <td>
                <label>เบอร์โทรศัพท์</label><br/>
                <input type='text' name='phone' required/>
              </td>
            </tr>
            <tr>
              <td>
                <label>รหัสผ่าน</label><br/>
                <input type='password' name='pwd' required/>
              </td>
              <td>
                <label>ยืนยันรหัสผ่าน</label><br/>
                <input type='password' name='pwd' required/>
              </td>
            </tr>
            <tr>
              <td>
                <label>ที่อยู่</label><br/>
                <textarea name='suggest' rows='3' cols='15' required/>
              </td>
            </tr>
          </table>
              <input type="checkbox" value="agree" required/>ฉันได้อ่านและยอมรับ
              <Link to="/conprivacy" >ข้อตกลงและเงื่อนไขการใช้งานของ PAWCARE</Link>
              <input type="submit" value="SIGN UP" className='signup-submit'/>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default SignupComponent