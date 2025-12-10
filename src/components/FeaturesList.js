import React from 'react';

const FeaturesList = () => {
  const features = [
    {
      icon: "fa fa-check-circle",
      title: "Quality Results",
      description: "Our conversions and engineering solutions deliver reliable, high-performance outcomes tailored to Nigerian conditions."
    },
    {
      icon: "fa fa-shield",
      title: "Safety & Reliability",
      description: "Every system is rigorously tested to international standards, ensuring dependable and safe operation on Nigerian roads"
    },
    {
      icon: "fa fa-tags",
      title: "Good Pricing",
      description: "We offer cost-effective CNG conversion packages without compromising quality, making clean energy accessible to everyone."
    },
    {
      icon: "fa fa-users",
      title: "Expert Engineering Team",
      description: "Our skilled engineers calibrate every conversion for heat, dust, and local driving conditions for peak efficiency"
    },
    {
      icon: "fa fa-life-ring",
      title: "Free Support",
      description: "We provide ongoing technical assistance and guidance to ensure optimal vehicle performance and safety."
    },
    {
      icon: "fa fa-globe",
      title: "Nationwide Capacity",
      description: "Through partnerships with PCNGI, NITT, and NTB, we expand national CNG expertise and support sustainable mobility."
    }
  ];

  return (
    <div className="container-fluid gtco-features-list" style={{ paddingTop: '20px' }}>
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="media col-md-6 col-lg-4">
              <div className="oval mr-4">
                <i className={`${feature.icon} align-self-start`} style={{fontSize: '2rem'}} aria-hidden="true"></i>
              </div>
              <div className="media-body">
                <h5 className="mb-0">{feature.title}</h5>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;