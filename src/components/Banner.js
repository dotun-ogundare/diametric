import React from 'react';

const Banner = () => {
  return (
    <div className="container-fluid gtco-banner-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              Accelerating Nigeria's <span> clean mobility </span> with CNG conversion ⚡
            </h1>
            <p>🔋 Driving Nigeria's CNG future through innovation, infrastructure, training, and partnerships.</p>
            <a href="#">
              Contact Us <i className="fa fa-angle-right" aria-hidden="true" style={{color: '#4a7c59'}}></i>
            </a>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img className="card-img-top img-fluid" src="images/banner-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;