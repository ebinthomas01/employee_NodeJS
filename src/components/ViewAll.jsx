import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData] =useState([])
        const fetchData=()=>{
            axios.get("http://localhost:8081/view").then((response)=>{
                changeData(response.data)
            }
        ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
        

  return (
    <div>
        <NavBar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                                    <thead>
                                        <tr>
                                       
                                        <th scope="col">FIRST NAME</th>
                                        <th scope="col">LAST NAME</th>
                                        <th scope="col">COMPANY</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">DESIGNATION</th>
                                        <th scope="col">MOBILE</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">ADDRESS</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                            {
                                data.map(
                                    
                                    (value, index) => { return   <tr>
                                                
                                                <td>{value.firstname}</td>
                                                <td>{value.lastname}</td>
                                                <td>{value.company}</td>
                                                <td>{value.dob}</td>
                                                <td>{value.designation}</td>
                                                <td>{value.mobile}</td>
                                                <td>{value.email}</td>
                                                <td>{value.address}</td>
                                            </tr>
                                            
                                    }
                                )
                            }
                            </tbody>
                          </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll