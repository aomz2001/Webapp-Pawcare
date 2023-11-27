import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


function Home() {
  const [ServPetList, setServPetList] = useState([]);
  const [selectedServPet, setSelectedServPet] = useState('');

  const [ServDistrictList, setServDistrictList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const [ServServiceList, setServServiceList] = useState([]);
  const [selectedService, setSelectedService] = useState('');

  const [ServPriceList, setServPriceList] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:5050/showservpet').then((data) => data.json()).then((val) => setServPetList(val))
  }, []);
  console.log(ServPetList, "ServPetList")

  useEffect(() => {
    fetch('http://localhost:5050/showservdistrict').then((data) => data.json()).then((val) => setServDistrictList(val))
  }, []);
  console.log(ServDistrictList, "ServDistrictList")

  useEffect(() => {
    fetch('http://localhost:5050/showservservice').then((data) => data.json()).then((val) => setServServiceList(val))
  }, []);
  console.log(ServServiceList, "ServServiceList")

  useEffect(() => {
    fetch('http://localhost:5050/showservprice').then((data) => data.json()).then((val) => setServPriceList(val))
  }, []);
  console.log(ServPriceList, "ServPriceList")

  //==========================================เอาไว้กรอกไม่ให้เข้าหน้านั้นๆเมื่อยังไม่ได้ Sign in===================================================
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
    
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5050/authen", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}` // Set Authorization header correctly
  //         },
  //       });
  
  //       const result = await response.json();
  //       console.log(result); // Handle the response from the server
  
  //       if (result.status === "ok") {
  //         // alert("Authen Success");
  //       } else {
  //         alert("Authen Failed");
  //         localStorage.removeItem('token')
  //         window.location = '/signup'; // Redirect on authentication failure
  //       }
  
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
   //==============================================เอาไว้กรอกไม่ให้เข้าหน้านั้นๆเมื่อยังไม่ได้ Sign in=============================================


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
                <select className='select-box-pet' defaultValue="" onChange={(e) => setSelectedServPet(e.target.value)}>
                  <option value="" className='text-select' hidden>สัตว์เลี้ยง</option>
                  {
                    ServPetList.map((opts, i) => <option className='text-select' key={i}>{opts.servpet_pet}</option>)
                  }
                </select>
                <br />

                <select className='select-box-pet' defaultValue="" onChange={(e) => setSelectedDistrict(e.target.value)}>
                  <option value="" className='text-select' hidden>อำเภอ</option>
                  {
                    ServDistrictList.map((opts, i) => <option className='text-select' key={i}>{opts.servdistrict_district}</option>)
                  }
                </select>
                <br />

                <select className='select-box-pet' defaultValue="" onChange={(e) => setSelectedService(e.target.value)}>
                  <option value="" className='text-select' hidden>บริการ</option>
                  {
                    ServServiceList.map((opts, i) => <option className='text-select' key={i}>{opts.servservice_service}</option>)
                  }
                </select>
                <br />

                <select className='select-box-pet' defaultValue="" onChange={(e) => setSelectedPrice(e.target.value)}>
                  <option value="" className='text-select' hidden>ราคา</option>
                  {
                    ServPriceList.map((opts, i) => <option className='text-select' key={i}>{opts.servprice_price}</option>)
                  }
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
                <p>คุณสามารถร่วมธุรกิจไปกับเราได้หากคุณต้องการที่จะเป็นผู้ให้บริการ ไม่ว่าจะเป็น<br />บริการฝากเลี้ยง บริการพาสุนัขเดินเล่น บริการซื้อขาย และอื่นๆ </p>
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
              <p>บล็อก<br />เกี่ยวกับเรา<br />คำถามที่พบบ่อย<br />ข้อกำหนดการใช้งาน<br />นโยบายความเป็นส่วนตัว</p>
            </div>
            <div className="serve-pawcare">
              <h1>บริการสำหรับสัตว์เลี้ยง</h1>
              <p>ฝากสัตว์เลี้ยงข้ามคืน<br />พี่เลี้ยงดูแลสัตว์เลี้ยง<br />พาสุนัขเดินเล่น<br />พี่เลี้ยงในระหว่างวัน<br />อาบน้ำตัดขนสัตว์เลี้ยง</p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home