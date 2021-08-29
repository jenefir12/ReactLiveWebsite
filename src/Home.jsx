import React from 'react';
import image from './images/name.jpg';
import { NavLink } from 'react-router-dom';

const CustomMargin = {
    marginTop:'6rem',
}

const Home = () =>{
    return(
        <>
          <div className="container">
              <h2 className="text-center py-5">Portfolio</h2>
              <div className="row text-center" style={CustomMargin}>
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                      <h2>Im Front End (React JS Engineer) & <br/> UI/UX Designer</h2>
                      <p>Create Webiste in React JS and App design , web design in 
                          adobe xd and figma
                      </p>
                      <div className="btn">
                        <NavLink className="btn btn-outline-info" to="/about">Get Started</NavLink>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                      <div className="">
                        <img src={image} alt="image" className="img-fluid cus-image animated"/>
                        <br/>
                        <article>
                        <h5 className="animated1 px-2">Mahad Bukhari</h5>
                        </article>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
}
export default Home;