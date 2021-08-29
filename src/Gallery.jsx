import React from 'react';
import atrule from './images/atrule1.png';
import rapid from './images/rapid.png';
import dev from './images/dev.png';
import Same from './Same';
import Data from './Data';
import Footer from './Footer';

const Gallery = () =>{
    return(
        <>
        <div className="container">
          <h4 className="text-center py-3">Welcome to My Sites</h4>
          <div className="row">
            {Data.map((val,index) => {
              return <Same
                key={index}
                img1={val.img1}
                visit={val.visit}
              />
            })
          }
          </div>
        </div>
        </>
    );
}
export default Gallery;