import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Array from './Array';
import Same2 from './Same2';
import Footer from './Footer';

const Technology = () => {
    return(
        <>
        <h3 className="text-center py-5">My Front End Technologies</h3>
        <div className="container">
            <div className="row my-2 gx-3 gy-3">
                {Array.map((pre,index)=>{
                return <Same2
                key={index}
                imgsrc={pre.imgsrc}
                title={pre.title}
                para={pre.para}
                btn={pre.btn}
                link={pre.link}
                />
                })}
            </div>
        </div>
        </>
    );
}
export default Technology;