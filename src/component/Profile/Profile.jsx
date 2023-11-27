import React, { useState, useEffect } from 'react'
import './Profile.css'
import axios from 'axios';

function Profile() {
  //==========================================เอาไว้กรอกไม่ให้เข้าหน้านั้นๆเมื่อยังไม่ได้ Sign in===================================================
  //==========================================แสดงข้อมูล ลบ แก้ไข ข้อมูล===================================================
  const [userData, setUserData] = useState({}); // เก็บข้อมูลผู้ใช้งาน
  const [previewImage, setPreviewImage] = useState('');

  const [newUsername, setNewUsername] = useState('');

  const handleChangeUsername = () => { 
    // ใช้ window.prompt ในการรับค่า Username ใหม่
    const newUsername = window.prompt('กรุณากรอก Username ใหม่:', '');
  
    // ตรวจสอบว่าผู้ใช้ไม่ได้กด "ยกเลิก" หรือป้อนค่าว่าง
    if (newUsername !== null && newUsername.trim() !== '') {
      // ทำสิ่งที่คุณต้องการเมื่อผู้ใช้ป้อน Username ใหม่แล้วกด "ตกลง"
  
      // ส่งค่า newUsername ไปยัง API เพื่ออัปเดต Username ในฐานข้อมูล
      const token = localStorage.getItem('token');
      const data = { newUsername }; // ส่ง Username ใหม่ไปยัง API
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios.put('http://localhost:5050/update-username', data, config)
        .then((response) => {
          if (response.data.status === 'ok') {
            // อัปเดต Username สำเร็จ
            alert('อัปเดต Username สำเร็จ');
            // ตรวจสอบ response.data หรือทำอย่างอื่นตามความต้องการ
          } else {
            alert('มีข้อผิดพลาดเกิดขึ้น');
            // หรือทำอย่างอื่นตามความต้องการในกรณีที่อัปเดตไม่สำเร็จ
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('มีข้อผิดพลาดเกิดขึ้น');
          // หรือทำอย่างอื่นตามความต้องการในกรณีที่เกิดข้อผิดพลาด
        });
    }
  };
  


  useEffect(() => {
    const token = localStorage.getItem('token');
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5050/authen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
        });
  
        const result = await response.json();
  
        if (result.status === "ok") {
          // ดึงข้อมูลของผู้ใช้งานจาก API
          const profileResponse = await axios.get('http://localhost:5050/profile');
          const userDataList = profileResponse.data; // ข้อมูลผู้ใช้งานเป็น array
          // ตรวจสอบว่ามีข้อมูลผู้ใช้งานอยู่หรือไม่
          if (userDataList.length > 0) {
            // ให้ใช้ข้อมูลผู้ใช้งานที่ตรงกับ username หรือ ID ของผู้ใช้งานที่เข้าสู่ระบบ
            const loggedInUserData = userDataList.find(user => user.signup_uname === result.decoded.signup_uname);
            // ตั้งค่าข้อมูลผู้ใช้งาน
            setUserData(loggedInUserData);
          } else {
            alert("ไม่พบข้อมูลผู้ใช้งาน");
          }
        } else {
          alert("โปรด Sign In ก่อนใช้งาน");
          localStorage.removeItem('token');
          window.location = '/signup';
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage('');
    }
  };


  return (
    <>
      <div className='bg-profile'>
        <form className="profile-form">
          <table>
            <tbody>
              <tr>
                <td><h4>โปรไฟล์ของคุณ</h4></td>
              </tr>
            </tbody>
          </table>

          <div className="profile-upload">
            <div className="profile-picture">
              <img src={previewImage || '#'} alt="Preview" />
            </div>
            <label className='ch-profile' htmlFor="upload">เปลี่ยนรูปโปรไฟล์</label>
            <input type="file" id="upload" name="upload" accept="image/*" onChange={handleImageChange} />
          </div>

          <div className="frame-info">
            <br />
            <label htmlFor="username">Username : {userData.signup_uname}</label>
            <button className='p-chpwd' type="button" onClick={handleChangeUsername}>เปลี่ยน Username</button><br /><br />
            
            <label htmlFor="fullname">ชื่อ-นามสกุล : {userData.signup_fullname}</label>
            <button className='p-chpwd' type="button">เปลี่ยน ชื่อ-นามสกุล</button><br /><br />

            <label htmlFor="email">อีเมล : {userData.signup_email}</label>
            <button className='p-chpwd' type="button">เปลี่ยน อีเมล</button><br /><br />

            <label htmlFor="phone">เบอร์โทรศัพท์ : {userData.signup_phone}</label>
            <button className='p-chpwd' type="button">เปลี่ยน เบอร์โทรศัพท์</button><br /><br />

            <label htmlFor="province">ที่อยู่ : {userData.signup_address}</label>
            <button className='p-chpwd' type="button">เปลี่ยน ที่อยู่</button><br /><br />

            <label htmlFor="province">ลบบัญชี ?</label>
            <button className='delete-profile' >ลบบัญชี</button><br /><br />
            
          </div>

          <div className="con-save">
            <button className='p-save' type="submit">บันทึก</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Profile