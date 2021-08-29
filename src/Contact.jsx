import React, { useState } from 'react';
import Footer from './Footer';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

const Contact = () =>{
    const[text,setState] = useState({
        fname:'',
        email:'',
        address:'',
    });
    const inputValue = (event) => {
        const{name,value} = event.target;
        setState((preValue) => {
            return{
                ...preValue,
                [name]:value
            }
        });
    }
    const myFun = () => {
        setState((preValue) => {
            if(preValue.fname === ""){
                return alert('plz fill the form');
            }else if(preValue.email === ""){
                return alert('plz fill the email address');
            }else if (preValue.address === ""){
                return alert('plz the address');
            }else{
                return alert ('your form is subitted');
            }
        });
    }
    return(
        <>
        <h3 className="text-center py-3">Contact Me</h3>
        <div className="container" style={{paddingLeft:'14rem'}}>
        <div className="row py-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="d-flex">
                    <MailOutlineIcon></MailOutlineIcon>
                    <p className="px-2">bmahad083@gmail.com</p>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="d-flex">
                    <PhoneIcon></PhoneIcon>
                    <p className="px-2">+92 3186350578</p>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
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
        </div>
        </>
    );
}
export default Contact;