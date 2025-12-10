import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <footer className="container-fluid" id="gtco-footer" style={{ paddingTop: '40px', marginTop: '0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" id="contact">
            <h4>Contact Us</h4>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea 
                className="form-control" 
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <button type="submit" className="submit-button">
                SEND MESSAGE <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6">
                <h4>Company</h4>
                <ul className="nav flex-column company-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">FAQ's</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
                <h4 className="mt-5">Follow Us</h4>
                <ul className="nav follow-us-nav">
                  <li className="nav-item">
                    <a className="nav-link pl-0" href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-google" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <h4>Services</h4>
                <ul className="nav flex-column services-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Station Development</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Research & Development</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">CNG Conversion</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Training</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">CNG Powertrains Maintenance</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Dispensing</a>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <p>
                  &copy; 2025. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;