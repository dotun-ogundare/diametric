import React from 'react';

const LogoArea = () => {
  const logos = [
    "images/logo1.png",
    "images/logo2.png",
    "images/logo3.png",
    "images/logo4.png",
    "images/logo5.png"
  ];

  return (
    <div className="container-fluid gtco-logo-area">
      <div className="container">
        <div className="row">
          {logos.map((logo, index) => (
            <div key={index} className="col">
              <img src={logo} className="img-fluid" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoArea;