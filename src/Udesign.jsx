import React from 'react';

const Udesign = (props) =>{
    return(
        <>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <img src={props.image} alt="image"/> 
          </div>
        </>
    );
}
export default Udesign;