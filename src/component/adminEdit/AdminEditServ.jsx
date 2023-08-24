import React, { useState } from 'react'
import './AdminEditServ.css'
import axios from 'axios'

function AdminEditServ() {

    const [pet, setPet] = useState("");
    const [newPet, setNewPet] = useState("");
    const [district, setDistrict] = useState("");
    const [newDistrict, setNewDistrict] = useState("");
    const [service, setService] = useState("");
    const [newService, setNewService] = useState("");
    const [price, setPrice] = useState("");
    const [newPrice, setNewPrice] = useState("");

    const [ServPetList, setServPetList] = useState([]);
    const [ServDistrictList, setServDistrictList] = useState([]);
    const [ServServiceList, setServServiceList] = useState([]);
    const [ServPriceList, setServPriceList] = useState([]);

    /*=========================================================================================== Pet*/
    const showPet = () => {
        axios.get('http://localhost:5050/showservpet').then((response) => {
            setServPetList(response.data);
        });
    }

    const addServPet = () => {
        axios.post('http://localhost:5050/showservpet-add', {
            servpet_pet: pet,
        }).then(() => {
            setServPetList([
                ...ServPetList,
                {
                    servpet_pet: pet,
                }
            ])
        })
    }
    const updateServPet = (servpet_id) => {
        axios.put('http://localhost:5050/showservpet-update', { servpet_pet: newPet, servpet_id: servpet_id },).then((response) => {
            setServPetList(
                ServPetList.map((val) => {
                        return val.servpet_id == servpet_id ? {
                            adminServ_id: val.adminServ_id,
                            servpet_pet: newPet
                        } : val;
                    })
                )
            })
    }
    const deleteServPet = (servpet_id) =>{
        axios.delete(`http://localhost:5050/showservpet-delete/${servpet_id}`).then((response) =>{
            setServPetList(
                ServPetList.filter((val) => {
                    return val.servpet_id != servpet_id;
                })
            )
        })
    }
    /*=========================================================================================== */
    /*=========================================================================================== District */
    const showDistrict = () => {
        axios.get('http://localhost:5050/showservdistrict').then((response) => {
            setServDistrictList(response.data);
        });
    }

    const addServDistrict = () => {
        axios.post('http://localhost:5050/showservdistrict-add', {
            servdistrict_district: district,
        }).then(() => {
            setServDistrictList([
                ...ServDistrictList,
                {
                    servdistrict_district: district,
                }
            ])
        })
    }
    const updateDistrict = (servdistrict_id) => {
        axios.put('http://localhost:5050/showservdistrict-update', 
        { servdistrict_district: newDistrict, servdistrict_id: servdistrict_id },).then((response) => {
            setServDistrictList(
                ServDistrictList.map((val) => {
                        return val.servdistrict_id == servdistrict_id ? {
                            
                            servdistrict_id: newDistrict
                        } : val;
                    })
                )
            })
    }
    const deleteServDistrict = (servdistrict_id) =>{
        axios.delete(`http://localhost:5050/showservdistrict-delete/${servdistrict_id}`).then((response) =>{
            setServDistrictList(
                ServDistrictList.filter((val) => {
                    return val.servdistrict_id != servdistrict_id;
                })
            )
        })
    }
    /*=========================================================================================== */
    /*=========================================================================================== Service */
    const showService = () => {
        axios.get('http://localhost:5050/showservservice').then((response) => {
            setServServiceList(response.data);
        });
    }

    const addServService = () => {
        axios.post('http://localhost:5050/showservservice-add', {
            servservice_service: service,
        }).then(() => {
            setServServiceList([
                ...ServServiceList,
                {
                    servservice_service: service,
                }
            ])
        })
    }
    const updateService = (servservice_id) => {
        axios.put('http://localhost:5050/showservservice-update', 
        { servservice_service: newService, servservice_id: servservice_id },).then((response) => {
            setServServiceList(
                ServServiceList.map((val) => {
                        return val.servservice_id == servservice_id ? {
                            servservice_id: newService
                        } : val;
                    })
                )
            })
    }
    const deleteServService = (servservice_id) =>{
        axios.delete(`http://localhost:5050/showservservice-delete/${servservice_id}`).then((response) =>{
            setServServiceList(
                ServServiceList.filter((val) => {
                    return val.servservice_id != servservice_id;
                })
            )
        })
    }
    /*=========================================================================================== */
    /*=========================================================================================== Price */
    const showPrice = () => {
        axios.get('http://localhost:5050/showservprice').then((response) => {
            setServPriceList(response.data);
        });
    }

    const addServPrice = () => {
        axios.post('http://localhost:5050/showservprice-add', {
            servprice_price: price,
        }).then(() => {
            ServPriceList([
                ...ServPriceList,
                {
                    servprice_price: price,
                }
            ])
        })
    }
    const updatePrice = (servprice_id) => {
        axios.put('http://localhost:5050/showservprice-update', 
        { servprice_price: newPrice, servprice_id: servprice_id },).then((response) => {
            ServPriceList(
                ServPriceList.map((val) => {
                        return val.servprice_id == servprice_id ? {
                            servprice_id: newPrice
                        } : val;
                    })
                )
            })
    }
    const deleteServPrice = (servprice_id) =>{
        axios.delete(`http://localhost:5050/showservprice-delete/${servprice_id}`).then((response) =>{
            ServPriceList(
                ServPriceList.filter((val) => {
                    return val.servprice_id != servprice_id;
                })
            )
        })
    }
    /*=========================================================================================== */
    return (
        <>
            <div className="container-admin">
                <h1>Admin PAWCARE Information </h1><br />
                <hr />

                <div className="serv-admin">
                    <form action=''>
                        <div className="admin-title">
                            <label htmlFor="pet">สัตว์เลี้ยง</label>
                            <input className='admin-input' placeholder='...'
                                onChange={(event) => {
                                    setPet(event.target.value)
                                }}
                            />
                            <button className='ok-list' onClick={addServPet}>เพิ่มรายการ</button>
                        </div>
                    </form>
                    <div className="card-show-pet">
                        <button className='show-list' onClick={showPet}>แสดงรายการ</button>
                        {ServPetList.map((val, key) => (
                            <div className="admin-card">
                                <div className="text-info-admin">
                                    <p className='card-text'>สัตว์เลี้ยง: {val.servpet_pet}</p>
                                    <input className='admin-input'
                                        onChange={(event) => {
                                            setNewPet(event.target.value)
                                        }}>
                                    </input>
                                    <button className='update-list' onClick={() => { updateServPet(val.servpet_id) }}>อัพเดทข้อมูลสัตว์เลี้ยง</button>
                                    <button className='delete-list'onClick={() => { deleteServPet(val.servpet_id) }}>ลบข้อมูล</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br/><hr />
                </div>

                <div className="serv-admin">
                    <form action=''>
                        <div className="admin-title">
                            <label htmlFor="pet">อำเภอ</label>
                            <input className='admin-input' placeholder='...'
                                onChange={(event) => {
                                    setDistrict(event.target.value)
                                }}
                            />
                            <button className='ok-list' onClick={addServDistrict}>เพิ่มรายการ</button>
                        </div>
                    </form>
                    <div className="card-show-pet">
                        <button className='show-list' onClick={showDistrict}>แสดงรายการ</button>
                        {ServDistrictList.map((val, key) => (
                            <div className="admin-card">
                                <div className="text-info-admin">
                                    <p className='card-text'>อำเภอ: {val.servdistrict_district}</p>
                                    <input className='admin-input'
                                        onChange={(event) => {
                                            setNewDistrict(event.target.value)
                                        }}>
                                    </input>
                                    <button className='update-list' onClick={() => { updateDistrict(val.servdistrict_id) }}>อัพเดทข้อมูลอำเภอ</button>
                                    <button className='delete-list'onClick={() => { deleteServDistrict(val.servdistrict_id) }}>ลบข้อมูล</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br/><hr />
                </div>

                <div className="serv-admin">
                    <form action=''>
                        <div className="admin-title">
                            <label htmlFor="pet">บริการ</label>
                            <input className='admin-input' placeholder='...'
                                onChange={(event) => {
                                    setService(event.target.value)
                                }}
                            />
                            <button className='ok-list' onClick={addServService}>เพิ่มรายการ</button>
                        </div>
                    </form>
                    <div className="card-show-pet">
                        <button className='show-list' onClick={showService}>แสดงรายการ</button>
                        {ServServiceList.map((val, key) => (
                            <div className="admin-card">
                                <div className="text-info-admin">
                                    <p className='card-text'>บริการ: {val.servservice_service}</p>
                                    <input className='admin-input'
                                        onChange={(event) => {
                                            setNewService(event.target.value)
                                        }}>
                                    </input>
                                    <button className='update-list' onClick={() => { updateService(val.servservice_id) }}>อัพเดทข้อมูลบริการ</button>
                                    <button className='delete-list'onClick={() => { deleteServService(val.servservice_id) }}>ลบข้อมูล</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br/><hr />
                </div>

                <div className="serv-admin">
                    <form action=''>
                        <div className="admin-title">
                            <label htmlFor="pet">ราคา</label>
                            <input className='admin-input' placeholder='...'
                                onChange={(event) => {
                                    setPrice(event.target.value)
                                }}
                            />
                            <button className='ok-list' onClick={addServPrice}>เพิ่มรายการ</button>
                        </div>
                    </form>
                    <div className="card-show-pet">
                        <button className='show-list' onClick={showPrice}>แสดงรายการ</button>
                        {ServPriceList.map((val, key) => (
                            <div className="admin-card">
                                <div className="text-info-admin">
                                    <p className='card-text'>ราคา: {val.servprice_price}</p>
                                    <input className='admin-input'
                                        onChange={(event) => {
                                            setNewPrice(event.target.value)
                                        }}>
                                    </input>
                                    <button className='update-list' onClick={() => { updatePrice(val.servprice_id) }}>อัพเดทข้อมูลราคา</button>
                                    <button className='delete-list'onClick={() => { deleteServPrice(val.servprice_id) }}>ลบข้อมูล</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br/><hr />
                </div>

            </div>
        </>
    )
}

export default AdminEditServ