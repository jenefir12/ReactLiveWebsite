import React, { useState } from 'react';
import Footer from './Footer';
import contact from '../src/images/contact.svg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

const Contact = () =>{
    // const[text,setState] = useState({
    //     fname:'',
    //     email:'',
    //     address:'',
    // });
    // const inputValue = (event) => {
    //     const{name,value} = event.target;
    //     setState((preValue) => {
    //         return{
    //             ...preValue,
    //             [name]:value
    //         }
    //     });
    // }
    // const myFun = () => {
    //     setState((preValue) => {
    //         if(preValue.fname === ""){
    //             return alert('plz fill the form');
    //         }else if(preValue.email === ""){
    //             return alert('plz fill the email address');
    //         }else if (preValue.address === ""){
    //             return alert('plz the address');
    //         }else{
    //             return alert ('your form is subitted');
    //         }
    //     });
    // }
    return(
        <>
        <h3 className="text-center py-2">Contact Me</h3>
        <div className="main-para mt-3 d-flex justify-content-sm-around justify-content-lg-around justify-content-md-around justify-content-xxl-around justify-content-xl-around">
            <div className="mail-now">
                <div className="first d-flex">
                    <MailOutlineIcon></MailOutlineIcon>
                    <strong>bmahad083@gmail.com</strong>
                </div>
            </div>
            <div className="contact-now">
                <div className="second d-flex">
                    <PhoneIcon></PhoneIcon>
                    <strong>+92 318-6350578</strong>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <img src={contact} alt="image" className="mt-4 img-fluid animated text-center" style={{width:'66%',marginLeft:'12rem'}}/>
            </div>
            </div>
        </div>
        {/* <div className="container">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <form style={{marginBottom:'8rem'}}>
            <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Your Name</label>
                    <input type="text" name="fname" value={text.fname} onChange={inputValue} placeholder="Enter Your Full Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" value={text.email} onChange={inputValue} placeholder="Enter Your Email Address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Your Address</label>
                    <input type="text" name="address" value={text.address} onChange={inputValue} placeholder="Enter Your Address" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={myFun} className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div> */}
        </>
    );
}
export default Contact;