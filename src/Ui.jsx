import React from 'react';
import Design from './Design';
import Udesign from './Udesign';
import Footer from './Footer';

const Ui = () =>{
    return(
        <>
        <h3 className="text-center py-5">UI UX App Design</h3>
        <div className="container">
            <div className="row py-5 gy-3 gx-0 text-center">
                {
                    Design.map((yes,index) => {
                        return <Udesign
                           key={index}
                           image={yes.image}
                        />
                    })
                }
            </div>
        </div>
        </>
    );
}
export default Ui;