import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [data,setData]=useState([
        {
            "name":"",
            "email":"",
            "password":"",
            "confirmpassword":""
        }
    ])
    const inputHandler=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post(" http://localhost:8081/signUp",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }

  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="">username</label>
                            <input type="text" className="form-control"  name='username' value={data.username} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">emailid</label>
                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">confirm password</label>
                            <input type="text" className="form-control" name='confirm' value={data.confirmpassword} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                        </div>
                    </div>
                    <a href="SignIn.jsx" >new user click here</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp