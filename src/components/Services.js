import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "images/services/research.png",
      title: "CNG Research & Product Development",
      description: "System calibration for Nigerian driving conditions (heat, dust, duty cycles)."
    },
    {
      icon: "images/services/maintenance.png",
      title: "Vehicle Conversion & After-Sales",
      description: "Petrol-to-CNG retrofits for sedans, SUVs, vans, light trucks, buses, and generators." 
      // "Multi-injector, dual-fuel switch systems; 60–100L cylinder configurations. Diagnostics, periodic inspections, and warranty support."
      // desc: "Kit performance benchmarking (single & multi-point injection). Safety engineering, failure-mode analysis, and standards conformance."
      // "Dispenser integration, metering, and telemetry. Site design, installation, commissioning, and staff training."
      // "Driver and fleet-manager safety courses."
    },
    {
      icon: "images/services/dispensing.png",
      title: "Dispensing & Station Development",
      description: "Daughter stations, cascades, and skid-mounted dispensers." 
    },
    {
      icon: "images/services/training.png",
      title: "Training, Certification & Local Capacity",
      description: "Technician upskilling aligned with national curricula."
    }
  ];

  return (
    <div className="container-fluid gtco-features" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2>
              Our services
            </h2>
            <p>
              At Diametrics Engineering Ltd, we provide end-to-end CNG solutions designed for Nigeria’s unique 
              mobility and energy landscape --from design and installation to commissioning and training.

            </p>
            <a href="#">
              All Services <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <div style={{marginTop: '30px'}}>
              <img 
                src="images/services/service.png" 
                alt="Services" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <svg 
              id="bg-services"
              width="100%"
              viewBox="0 0 1000 800"
            >
              <defs>
                <linearGradient id="PSgrad_02" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                  <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity="1"/>
                  <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity="1"/>
                </linearGradient>
              </defs>
              <path 
                fillRule="evenodd" 
                opacity="0.102" 
                fill="url(#PSgrad_02)"
                d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"
              />
            </svg>
            <div className="row">
              <div className="col">
                {services.slice(0, 2).map((service, index) => (
                  <div key={index} className="card text-center">
                    <div className="oval">
                      <img className="card-img-top" src={service.icon} alt="" />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col">
                {services.slice(2, 4).map((service, index) => (
                  <div key={index} className="card text-center">
                    <div className="oval">
                      <img className="card-img-top" src={service.icon} alt="" />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;