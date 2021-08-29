import React from 'react';

const footer = {
    backgroundColor:'dodgerblue',
    color:'white',
    padding:'8px 10px'
}

const Footer = () => {
    return(
        <>
          <footer style={footer}>
              <h6 className="text-center">@ Copyright 2021 DesignBy: Mahad Bukhari</h6>
          </footer>
        </>
    );
}
export default Footer;