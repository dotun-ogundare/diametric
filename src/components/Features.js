import React from 'react';

const Features = () => {
  return (
    <div className="container-fluid gtco-feature" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="cover">
              <div className="card">
                <svg
                  className="back-bg"
                  width="100%" 
                  viewBox="0 0 900 700" 
                  style={{position:'absolute', zIndex: -1}}
                >
                  <defs>
                    <linearGradient id="PSgrad_01" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                      <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity="1"/>
                      <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity="1"/>
                    </linearGradient>
                  </defs>
                  <path 
                    fillRule="evenodd" 
                    opacity="0.102" 
                    fill="url(#PSgrad_01)"
                    d="M616.656,2.494 L89.351,98.948 C19.867,111.658 -16.508,176.639 7.408,240.130 L122.755,546.348 C141.761,596.806 203.597,623.407 259.843,609.597 L697.535,502.126 C748.221,489.680 783.967,441.432 777.751,392.742 L739.837,95.775 C732.096,35.145 677.715,-8.675 616.656,2.494 Z"
                  />
                </svg>

                <svg width="100%" viewBox="0 0 700 500">
                  <clipPath id="clip-path">
                    <path d="M89.479,0.180 L512.635,25.932 C568.395,29.326 603.115,76.927 590.357,129.078 L528.827,380.603 C518.688,422.048 472.661,448.814 427.190,443.300 L73.350,400.391 C32.374,395.422 -0.267,360.907 -0.002,322.064 L1.609,85.154 C1.938,36.786 40.481,-2.801 89.479,0.180 Z"></path>
                  </clipPath>
                  <image 
                    clipPath="url(#clip-path)" 
                    xlinkHref="images/learn-img.jpg" 
                    width="100%"
                    height="465" 
                    className="svg__image"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2>Driving Nigeria’s transition with advanced CNG solutions</h2>
            <p>
              Diametrics Engineering Ltd is a Nigerian clean-mobility company dedicated to accelerating Compressed 
              Natural Gas (CNG) adoption across transport and power applications. 
            </p>
            <p>
              <small>
                We specialize in CNG research, vehicle conversion, dispensing infrastructure, and end-to-end project 
                development. As an affiliate partner to the Presidential CNG Initiative (PCNGI), and a technical partner 
                to NITT and the National Technical Training Board, we deliver nationally aligned programs with strong 
                state-government collaboration.
              </small>
            </p>
            <a href="#">
              Learn More <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;