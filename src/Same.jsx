import React from 'react';
import {NavLink} from 'react-router-dom';


const Same = (props) =>{
    return(
        <>
         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className=" py-5">
                <a href={props.visit} target="_blank">
                    <img src={props.img1} alt="image" className="img-fluid"/>
                </a>
            </div>
        </div>
        </>
    );
}
export default Same;