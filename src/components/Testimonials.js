import React, { useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Bello",
      title: "Abuja",
      quote: "Diametrics Engineering made the switch to CNG seamless for my family van. The engineers were thorough, ensuring safety and performance. Their after-sales support is excellent, answering all my questions even after installation. Truly a dependable company!"
    },
    {
      name: "Emeka Okafor",
      title: "Porthacourt",
      quote: "From consultation to conversion, Diametrics Engineering exceeded my expectations. The quality of their work and attention to detail are impressive. I feel confident driving my converted vehicle and saving on fuel costs. Professional and reliable."
    },
    {
      name: "Funke Adeyemi",
      title: "Ibadan",
      quote: "I was skeptical about converting my generator to CNG, but Diametrics Engineering handled everything professionally. The installation was smooth, the system works perfectly, and their team provided helpful guidance. I’m very satisfied with their service."
    },
    {
      name: "Chinedu Nwosu",
      title: "Lagos",
      quote: "I had my SUV converted to CNG by Diametrics Engineering, and the experience was fantastic. The team was professional, knowledgeable, and attentive. My car runs smoother and more efficiently, and the cost savings are noticeable already. Highly recommended."
    }
  ];

  useEffect(() => {
    // Initialize owl carousel for testimonials - one item at a time
    if (window.$ && window.$('.owl-carousel1').length) {
      window.$('.owl-carousel1').owlCarousel({
        loop: true,
        center: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true
          }
        }
      });
    }
  }, []);

  return (
    <div className="container-fluid gtco-testimonials" style={{ paddingTop: '40px', marginTop: '0px' }}>
      <div className="container">
        <h2 style={{ marginBottom: '20px', marginTop: '0px' }}>What our customers say about us.</h2>
        <div className="owl-carousel owl-carousel1 owl-theme">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div style={{
                textAlign: 'center',
                padding: '20px 20px 40px',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontSize: '1.3rem',
                  fontStyle: 'italic',
                  color: '#333',
                  marginBottom: '30px',
                  lineHeight: '1.8'
                }}>" {testimonial.quote} "</p>
                <h5 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#2d5016',
                  marginBottom: '5px'
                }}>
                  {testimonial.name}
                </h5>
                <span style={{
                  fontSize: '0.95rem',
                  color: '#4a7c59'
                }}>{testimonial.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;