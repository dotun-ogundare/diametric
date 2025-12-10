import React from 'react'

const Stats = () => {
  const geographicalFootprint = [
    { number: '4', label: 'South West', details: 'Lagos, Ogun, Oyo, Ondo' },
    { number: '1', label: 'North Central', details: 'Abuja (FCT)' },
    { number: '1', label: 'South East', details: 'Imo' },
    { number: '2', label: 'North West', details: 'Kano, Jigawa' },
    { number: '1', label: 'North East', details: 'Adamawa' },
  ]

  return (
    <div className="container-fluid gtco-numbers-block">
      <div
        className="container"
        style={{
          position: 'relative',
          paddingTop: '0px',
          paddingBottom: '30px',
          minHeight: '500px',
        }}
      >
        {/* Section Title */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '15px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <h2 style={{ color: '#000' }}>Our Geographical Footprint</h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#4a7c59',
            }}
          >
            Serving Nigeria Across Five Regions
          </p>
        </div>

        {/* Nigeria Map Background */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '700px',
            opacity: 0.25,
            zIndex: 0,
          }}
        >
          <img
            src="images/nigerian-map.svg"
            alt="Nigeria Map"
            style={{
              width: '100%',
              height: 'auto',
              filter: 'sepia(100%) saturate(300%) hue-rotate(70deg)',
            }}
          />
        </div>

        {/* Left Side Images */}
        <div
          style={{
            position: 'absolute',
            left: '2%',
            top: '120px',
            width: '280px',
            zIndex: 1,
          }}
        >
          <img
            src="images/geographical_footprint/1.jpg"
            alt="Location 1"
            style={{
              width: '97%',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '3px solid #4a7c59',
              marginBottom: '20px',
              boxShadow: '0 4px 10px rgba(45, 80, 22, 0.2)',
            }}
          />
          <img
            src="images/geographical_footprint/2.jpg"
            alt="Location 2"
            style={{
              width: '97%',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '3px solid #4a7c59',
              boxShadow: '0 4px 10px rgba(45, 80, 22, 0.2)',
            }}
          />
        </div>

        {/* Right Side Images */}
        <div
          style={{
            position: 'absolute',
            right: '2%',
            top: '120px',
            width: '280px',
            zIndex: 1,
          }}
        >
          <img
            src="images/geographical_footprint/3.jpg"
            alt="Location 3"
            style={{
              width: '97%',
              height: '180px',
              objectFit: 'cover',
              objectPosition: 'center 35%',
              borderRadius: '8px',
              border: '3px solid #4a7c59',
              marginBottom: '20px',
              boxShadow: '0 4px 10px rgba(45, 80, 22, 0.2)',
            }}
          />
          <img
            src="images/geographical_footprint/5.jpg"
            alt="Location 5"
            style={{
              width: '97%',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '3px solid #4a7c59',
              boxShadow: '0 4px 10px rgba(45, 80, 22, 0.2)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Stats
