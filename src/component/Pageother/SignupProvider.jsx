import React, {useState} from 'react'
import './SignupProvider.css'

function SignupProvider() {
  return (
    <>
    <div className="bg-signupprovider">
      <from className='signup-provider-form'>
        <table>
          <tr>
            <div className="title-provider-form">
              <td><h1>สมัครเป็นผู้ให้บริการ</h1></td>
            </div>
          </tr>
          <div className="frame-infoprovider-form">
            <tr>
              <td>
                <label for="username">ชื่อผู้ใช้งาน</label>
                <input className='signup-provider-user' name="username" required/>
              </td>
              <td>
                <label for="fullname">ชื่อ-นามสกุล</label>
                <input className='signup-provider-fullname' name="fullname" required/>
              </td>
              <td>
                <label for="phone">เบอร์โทรศัพท์</label>
                <input className='signup-provider-phone' name="phone" required/>
              </td>
            </tr>

            <tr>
              <td>
                <label for="password">รหัสผ่าน</label>
                <input className='signup-provider-pwd' name="pwd" required/>
              </td>
              <td>
                <label for="email">อีเมล</label>
                <input className='signup-provider-email' name="email" required/>
              </td>
              <td>
                <label for="address">ที่อยู่</label>
                <textarea className='signup-provider-address' required/>
              </td>
            </tr>

            <tr>
              <td>
                <label for="serv">บริการ (เลือกได้มากกว่า 1 อย่าง)</label><br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการฝากเลี้ยงค้างคืน<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการเล่นเดิน<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการซื้อ-ขาย<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการรับ-ส่ง<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการอาบน้ำทำความสะอาด
              </td>
              <td>
                <label for="price">ราคาที่ให้บริการ</label>
                <input className='signup-provider-price' required/>
              </td>
              <td>
                <label for="info-serv">บอกอะไรเกี่ยวกับบริการของคุณ</label>
                <textarea className='signup-provider-info'/>
              </td>
            </tr>

          </div>
        </table>

        <div className="con-apply">
          <button className='apply-provider' type="submit">สมัครเป็นผู้ให้บริการ</button>
        </div>
        
      </from>
    </div>
    </>
  )
}

export default SignupProvider