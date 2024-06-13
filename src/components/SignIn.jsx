import axios from 'axios'
import React, { useState } from 'react'

const SignIn = () => {
    const [data,setData]=useState([
        {

        }
    ])
const inputHandler=(event)=>{
setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8081/signIn",data).then(
        (response)=>{
        if (response.data.status=="success") {
            alert("success")
        } else {
            alert("error")
        }
    }
    ).catch().finally()
}
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control"  name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-success" onClick={readValue}>login</button>
                        </div>
                    </div>
                    <a href="/" >back to login</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn