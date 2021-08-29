import React from 'react';
import atrule from './images/atrule1.png';
import rapid from './images/rapid.png';
import dev from './images/dev.png';
import Same from './Same';
import Array from './Array';

const Ecommerce = () =>{
    return(
        <>
        <div className="container">
          <div className="row">
            {Array.map((valPro,index) => {
              return <Same
                key={index}
                img2={valPro.img2}
              />
            })
          }
          </div>
        </div>
        </>
    );
}
export default Ecommerce;