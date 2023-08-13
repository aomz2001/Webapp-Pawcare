import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="home-container">

        <div className="bg-hero">
          <div className="text-hero">
            <p>Dog & Cat Service</p>
            <h1>PAWCARE</h1>
            <p>Take Care Your “ True Friend ”</p>
          </div>
        </div>

        <div className="bg-subhero"></div>
        <div className="home-service">

          <div className="home-bg-title">
            <div className="frame-home-title">
              <div className="home-title">
                <div className="title-t1">
                  <h1>บริการฝาก<br />เลี้ยงค้างคืน</h1>
                  <p>หากต้องการคนดูแลสัตว์เลี้ยงขณะที่คุณไม่อยู่บ้านหรือมีธุระที่ไม่สามารถดูแลเจ้าตัวน้อยไดลองให้เราช่วยหาผู้ช่วยดูสิ....</p>
                </div>
              </div>

              <div className="home-title">
                <div className="title-t2">
                  <h1>บริการเดินเล่น</h1>
                  <p>หากต้องการคนดูแลสัตว์เลี้ยงขณะที่คุณไม่อยู่บ้านหรือมีธุระที่ไม่สามารถดูแลเจ้าตัวน้อยไดลองให้เราช่วยหาผู้ช่วยดูสิ....</p>
                </div>
              </div>

              <div className="home-title">
                <div className="title-t3">
                  {/* <img src='src/component/img/bg-ser.jpg' alt='' /> */}
                </div>
              </div>
            </div>

            <div className="frame-home-title-1">
              <div className="home-title-1">
                <div className="title-t4">
                  <h1>บริการซื้อขาย</h1>
                  <p>หากต้องการคนดูแลสัตว์เลี้ยงขณะที่คุณไม่อยู่บ้านหรือมีธุระที่ไม่สามารถดูแลเจ้าตัวน้อยไดลองให้เราช่วยหาผู้ช่วยดูสิ....</p>
                </div>
              </div>

              <div className="home-title-1">
                <div className="title-t5">
                  <h1>บริการรับ-ส่ง</h1>
                  <p>หากต้องการคนดูแลสัตว์เลี้ยงขณะที่คุณไม่อยู่บ้านหรือมีธุระที่ไม่สามารถดูแลเจ้าตัวน้อยไดลองให้เราช่วยหาผู้ช่วยดูสิ....</p>
                </div>
              </div>

              <div className="home-title-1">
                <div className="title-t6">
                  <h1>บริการอาบน้ำ<br />ทำความสะอาด</h1>
                  <p>หากต้องการคนดูแลสัตว์เลี้ยงขณะที่คุณไม่อยู่บ้านหรือมีธุระที่ไม่สามารถดูแลเจ้าตัวน้อยไดลองให้เราช่วยหาผู้ช่วยดูสิ....</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="find-pet">

          <div className='find-title'>
            <div className='frame-find1'>
              <div className="find-title-1">
                <h1>กำลังต้องการผู้ช่วยดูแลเจ้าเหมียวเจ้าตูบ<br />ของคุณอยู่ใช่หรือเปล่า...</h1>
                <p>ให้เราช่วยคุณหาผู้ช่วยใกล้ๆคุณสิ</p>
              </div>
              <form method="post">
                <select className='select-box-pet'>
                  <option value="" className='text-select' disabled selected hidden>สัตว์เลี้ยง</option>
                  <option value="dog" className='text-select'>สุนัข</option>
                  <option value="cat" className='text-select'>แมว</option>
                </select>
                <br />
                <select className='select-box-district'>
                  <option value="" className='text-select' disabled selected hidden>อำเภอ</option>
                  <option value="dis1" className='text-select'>อำเภอเมืองเชียงใหม่</option>
                </select>
                <br />
                <select className='select-box-serve'>
                  <option value="" className='text-select' disabled selected hidden>บริการ</option>
                  <option value="adoption" className='text-select'>บริการฝากเลี้ยงค้างคืน</option>
                  <option value="walk" className='text-select'>บริการเดินเล่น</option>
                  <option value="buy-sell" className='text-select'>บริการซื้อ-ขาย</option>
                  <option value="send" className='text-select'>บริการรับ-ส่ง</option>
                  <option value="shower" className='text-select'>บริการอาบน้ำทำความสะอาด</option>
                </select>
                <br />
                <select className='select-box-price'>
                  <option value="" className='text-select' disabled selected hidden>ราคา</option>
                  <option value="price1" className='text-select'>100-300</option>
                  <option value="price2" className='text-select'>300-500</option>
                  <option value="price3" className='text-select'>500-700</option>
                  <option value="price4" className='text-select'>700-1000</option>
                  <option value="price5" className='text-select'>1000-1500</option>
                  <option value="price6" className='text-select'>1500 ขึ้นไป</option>
                </select>
                <br />
                <button className='serach-button' type="submit" value="find-mentor">
                  ค้นหา
                </button>
              </form>
            </div>

          </div>

        </div>

        <div className="step-serve">
          <div className="bg-frame">
            <div className="frame-step">
              <div className="step-1">
                <div className="pic-step1"></div>
                  <div className="text-step1">
                    <h1>1.ค้นหาการบริการ</h1>
                    <p>กรองการค้นหาเพื่อให้ได้ข้อมูลการบริการที่คุณต้องการ</p>
                  </div>
              </div>
              <div className="step-2">
                <div className="pic-step2"></div>
                  <div className="text-step2">
                    <h1>2.เลือกพี่เลี้ยง</h1>
                    <p>เลือกพี่เลี้ยงที่คุณต้องการให้ดูแลเจ้าตัวน้อยสี่ขาของคุณ</p>
                  </div>
              </div>
              <div className="step-3">
                <div className="pic-step3"></div>
                  <div className="text-step3">
                    <h1>3.จองและนัดพบ</h1>
                    <p>จองและกำหนดวันเวลาที่ต้องการจะรับบริการ</p>
                  </div>
              </div>
              <div className="step-4">
                <div className="pic-step4"></div>
                  <div className="text-step4">
                    <h1>4.ยืนยันการใช้บริการ</h1>
                    <p>ยืนยันการข้อมูลการบริการต่างๆและรอรับบริการได้เลย</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-substep"></div>

        <div className="u-provider">
          <div className="f-u-provider">
            <div className="su-provider">
              <div className="text-provider">
                <h1>ร่วมเป็นผู้ให้บริการไปกับเรา</h1>
                <p>คุณสามารถร่วมธุรกิจไปกับเราได้หากคุณต้องการที่จะเป็นผู้ให้บริการ ไม่ว่าจะเป็น<br/>บริการฝากเลี้ยง บริการพาสุนัขเดินเล่น บริการซื้อขาย และอื่นๆ </p>
                  <button className='su-mentor-button' value="su-mentor">
                    <Link to="/signupprovider" className='su-mentor-button1'>สมัครเป็นผู้ให้บริการ</Link>
                  </button>
              </div>
              <div className="pic-provider"></div>
            </div>
          </div>

        </div>

        <div className="bg-substep"></div>

        <div className="about-us">
          <div className="frame-aboutus">
            <div className="text-aboutus">
              <h1>เกี่ยวกับเรา</h1>
              <p>แพลตฟอร์มจัดหาพี่เลี้ยงสุนัขและแมว เป็นระบบที่สามารถช่วยอำนาวยความสะดวกระหว่างเจ้าของสัตว์เลี้ยงและพี่เลี้ยงสัตว์เลี้ยง ในการติดต่อสื่อสาร และการใช้บริการสัตว์เลี้ยงในรูปแบบต่างๆ เช่น การการพาสุนัขเดินเล่น การอาบน้ำตัดขนสัตว์ และการซื้อขายเเลกเปลี่ยน เป็นต้น</p>
            </div>
          </div>
        </div>

        <div className="about-pawcare">
          <div className="frame-about-pawcare">
            <div className="pawcare">
              <h1>PAWCARE</h1>
              <p>บล็อก<br/>เกี่ยวกับเรา<br/>คำถามที่พบบ่อย<br/>ข้อกำหนดการใช้งาน<br/>นโยบายความเป็นส่วนตัว</p>
            </div>
            <div className="serve-pawcare">
              <h1>บริการสำหรับสัตว์เลี้ยง</h1>
              <p>ฝากสัตว์เลี้ยงข้ามคืน<br/>พี่เลี้ยงดูแลสัตว์เลี้ยง<br/>พาสุนัขเดินเล่น<br/>พี่เลี้ยงในระหว่างวัน<br/>อาบน้ำตัดขนสัตว์เลี้ยง</p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Home