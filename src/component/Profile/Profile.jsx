import React, {useState} from 'react'
import './Profile.css'

function Profile() {
  const [previewImage, setPreviewImage] = useState('');

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
        <tr>
          <div className="title-pf"><td>โปรไฟล์ของคุณ</td></div>
        </tr>
      </table>

      <div className="profile-upload">
        <div className="profile-picture">
          <img src={previewImage || '#'} alt="Preview" />
        </div>
          <label className='ch-profile' htmlFor="upload">เปลี่ยนรูปโปรไฟล์</label>
          <input type="file" id="upload" name="upload" accept="image/*" onChange={handleImageChange} />
      </div>

      <table>
        <div className="frame-info">
          <label for="username">Username</label>
          <input className='p-user' name="username" required/>

          <label for="fullname">ชื่อ-นามสกุล</label>
          <input className='p-funame' name="fullname" required/>

          <label for="email">อีเมล</label>
          <input className='p-email' type="email" name="email" required/>
          <button className='p-chemail' type="button">เปลี่ยนอีเมล</button>

          <label for="phone">เบอร์โทรศัพท์ที่ติดต่อได้</label>
          <input className='p-phone' type="tel" name="phone" required/>

          <label for="birthdate">วัน/เดือน/ปีเกิด</label>
          <input className='p-bd' type="date"  name="birthdate" required/>

          <label for="province">จังหวัดที่อาศัยอยู่ปัจุบัน</label>
          <input className='p-provider' name="province" required/>

          <label for="changepwd">รหัส</label>
          <button className='p-chpwd' type="button">เปลี่ยนรหัสผ่าน</button>
        </div>
      </table>
        <div className="con-save">
          <button className='p-save' type="submit">บันทึก</button>
        </div>
    </form>
    </div>
    </>
  )
}

export default Profile