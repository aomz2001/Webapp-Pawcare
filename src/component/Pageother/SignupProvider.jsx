import React, {useState, useEffect} from 'react'
import './SignupProvider.css'

function SignupProvider() {
  
//==========================================เอาไว้กรอกไม่ให้เข้าหน้านั้นๆเมื่อยังไม่ได้ Sign in===================================================
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5050/authen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` // Set Authorization header correctly
          },
        });
  
        const result = await response.json();
        console.log(result); // Handle the response from the server
  
        if (result.status === "ok") {
          // alert("Authen Success");
        } else {
          alert("โปรด Sign In ก่อนใช้งาน");
          localStorage.removeItem('token')
          window.location = '/signup'; // Redirect on authentication failure
        }
  
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, []);
//==========================================เอาไว้กรอกไม่ให้เข้าหน้านั้นๆเมื่อยังไม่ได้ Sign in===================================================

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
                <label htmlFor="username">ชื่อผู้ใช้งาน</label>
                <input className='signup-provider-user' name="username" required/>
              </td>
              <td>
                <label htmlFor="fullname">ชื่อ-นามสกุล</label>
                <input className='signup-provider-fullname' name="fullname" required/>
              </td>
              <td>
                <label htmlFor="phone">เบอร์โทรศัพท์</label>
                <input className='signup-provider-phone' name="phone" required/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">รหัสผ่าน</label>
                <input className='signup-provider-pwd' name="pwd" required/>
              </td>
              <td>
                <label htmlFor="email">อีเมล</label>
                <input className='signup-provider-email' name="email" required/>
              </td>
              <td>
                <label htmlFor="address">ที่อยู่</label>
                <textarea className='signup-provider-address' required/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="serv">บริการ (เลือกได้มากกว่า 1 อย่าง)</label><br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการฝากเลี้ยงค้างคืน<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการเล่นเดิน<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการซื้อ-ขาย<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการรับ-ส่ง<br/>
                <input className='signup-provider-serv' type="checkbox" name="phone" />บริการอาบน้ำทำความสะอาด
              </td>
              <td>
                <label htmlFor="price">ราคาที่ให้บริการ</label>
                <input className='signup-provider-price' required/>
              </td>
              <td>
                <label htmlFor="info-serv">บอกอะไรเกี่ยวกับบริการของคุณ</label>
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