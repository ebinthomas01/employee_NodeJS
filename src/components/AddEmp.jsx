import React, { useState } from 'react'
import NavBar from './NavBar'

const AddEmp = () => {
    const [data,setData] =useState(
        {
        "id":"",
        "fname":"",
        "lname":"",
        "clg":"",
        "dob":"",
        "course":"",
        "mobile":"",
        "email":"",
        "address":""
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }
    const readValue = () => {
        console.log(data)
    }

  return (
    <div>
        <NavBar/>   
        <div className="container-fluid">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label" >ID</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">FIRST NAME</label>
                        <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">LAST NAME</label>
                        <input type="text" className="form-control" name='lname' value={data.lname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">COLLEGE</label>
                        <input type="text" className="form-control" name='clg' value={data.clg}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">DOB</label>
                        <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">COURSE</label>
                        <select name="" id="" className="form-control"  >
                            <option className="option">Select Option</option>
                            <option className="option">BTECH CIVIL</option>
                            <option className="option">BTECH MECHANIC</option>
                            <option className="option">BTECH CS</option>
                            <option className="option">BTECH EEE</option>
                            <option className="option">BTECH INSTRUMENTAL</option>
                            <option className="option">MBA</option>
                            <option className="option">MCA</option>
                        </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">MOBILE</label>
                        <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">EMAIL</label>
                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form form-label">ADDRESS</label>
                        <textarea name="" id="" className="form-control" ></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success btn-lg" onClick={readValue}  >REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmp