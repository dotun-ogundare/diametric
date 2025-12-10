import React, { useEffect } from 'react';

const News = () => {
  const galleryImages = [
    {
      image: "images/geographical_footprint/1.jpg",
      caption: "CNG Infrastructure Development"
    },
    {
      image: "images/geographical_footprint/2.jpg",
      caption: "Engineering Excellence"
    },
    {
      image: "images/geographical_footprint/3.jpg",
      caption: "Team Collaboration"
    },
    {
      image: "images/geographical_footprint/4.jpg",
      caption: "Project Implementation"
    },
    {
      image: "images/geographical_footprint/5.jpg",
      caption: "Nationwide Operations"
    }
  ];

  useEffect(() => {
    // Initialize owl carousel for gallery
    if (window.$ && window.$('.owl-carousel2').length) {
      window.$('.owl-carousel2').owlCarousel({
        loop: true,
        center: false,
        margin: 20,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: true
          },
          1000: {
            items: 3,
            nav: true,
            loop: true
          }
        }
      });
    }
  }, []);

  return (
    <div className="container-fluid gtco-news" id="news">
      <div className="container">
        <h2>Gallery</h2>
        <div className="owl-carousel owl-carousel2 owl-theme">
          {galleryImages.map((item, index) => (
            <div key={index}>
              <div className="card text-center">
                <img 
                  className="card-img-top" 
                  src={item.image} 
                  alt={item.caption}
                  style={{
                    height: '300px',
                    objectFit: 'cover'
                  }}
                />
                <div className="card-body">
                  <h5 style={{
                    fontSize: '1rem',
                    color: '#2d5016',
                    marginBottom: '0'
                  }}>{item.caption}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;