import React from 'react';
import web from './images/about.svg';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const head = {
    marginTop:'7rem',
    marginBottom:'5px',
}

const word = {
    textAlign:'justify',
}

const About = () =>{
    return(
        <>
        <h3 className="text-center">About Me</h3>
        <div className="container">
            <div className="row" style={head}>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={web} alt="image" className="img-fluid animated"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                     <h5 style={word}>
                     I am an enterprising young professional software engineer, Front End Engineer | UI/UX Designer . In terms of results and objectives, I am enthusiastic and I work with decisiveness and conviction. I have a proactive attitude and find positive ways to stimulate and engage with people.I create website in HTML5 | CSS3 | BOOTSTRAP5 | JQUERY | JAVASCRIPT | SASS | and create mobile app design and web design , in this new modern era like Adobe XD , Figma ( MOCK UPS , PROTOTYPING , WIREFRAMES )..Logo Design, Poster Design, Graphics Assets Design, Social Media Design
                     </h5>
                     <div className="btn-2">
                         <NavLink className="btn btn-outline-info text-center my-5"to="/contact">Contact Me</NavLink>
                     </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default About;