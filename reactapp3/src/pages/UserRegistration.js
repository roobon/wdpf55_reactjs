import axios from 'axios'
import React, { useState } from 'react'


export default function UserRegistration() {
    const [formData, SetFormData] = useState({});

    const changeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
       
        SetFormData((val)=>({...val, [name]:value})) 
    }
    //console.log(formData);
   
    const submitHandler = (e)=>{
        e.preventDefault();

        if( formData.password !=  formData.cofirmpassword){
            alert("Password Doesn't match");
        } else {
            axios.get("http://localhost:8080/registration", formData).then(
                (res)=>{
                   alert(res.data.msg)
                }
            )
        }

    }
    
    return (
    <div>
                {/* <!-- Contact Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Get In Touch</h5>
                    <h1 className="display-5 w-50 mx-auto">User Registration Form</h1>
                </div>
                <div className="row g-5 mb-5">
                    
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
						
                        <form className="rounded contact-form" onSubmit={submitHandler}>
                            <div className="mb-4">
                                <input type="text" className="form-control p-3" name='name' onChange={changeHandler} placeholder="Your Name"/>
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control p-3" name='email' onChange={changeHandler} placeholder="Your Email"/>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control p-3" name='password' onChange={changeHandler}placeholder="Password"/>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control p-3" name='cofirmpassword' onChange={changeHandler}placeholder="Confirm Password"/>
                            </div>
                           
                            <button className="btn btn-primary border-0 py-3 px-4 rounded-pill" type="submit">REGISTRATION</button>
                        </form>
                    </div>
                </div>
                <div className="row g-4 wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fa fa-share text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">fallow Us</h4>
                                <div className="d-flex justify-content-center">
                                    <a className="pe-2" href="#"><i className="fab fa-facebook-f text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-twitter text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-instagram text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-linkedin-in text-dark"></i></a>
                                    <a className="px-2" href="#"><i className="fab fa-youtube text-dark"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fas fa-map-marker-alt text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">Address</h4>
                                <a href="#">
                                    <h5 className="text-dark d-inline fs-6">123 Street, CA, USA</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fa fa-phone text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">Call Us</h4>
                                <a className="h5 text-dark fs-6" href="tel:+0123456789">+012 3456 7890</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex bg-light p-3 rounded contact-btn-link">
                            <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{width: "64px", height: "64px"}}>
                                <i className="fa fa-envelope text-dark"></i>
                            </div>
                            <div className="ms-3 contact-link">
                                <h4 className="text-dark">Email Us</h4>
                                <a className="h5 text-dark fs-6" href="#">info@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}
    </div>
  )
}