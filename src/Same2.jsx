import React from 'react';
import { NavLink } from 'react-router-dom';

const Same2 = (props) => {
    return(
        <>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">{props.title}</h5>
                            <p className="card-text text-center">{props.para}</p>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Same2;