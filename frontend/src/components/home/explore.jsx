//import React from 'react';
import '../css/home.css'

const CompanyCards = () => {
  const companies = [
    {
      name: 'Graphics & Design',
      logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg',
    },
    {
      name: 'Digital Marketing',
      logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg',
    },
    {
      name: 'Writing & Translation',
      logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg',
    },
    {
      name: 'Video & Animation',
      logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg',
    },
    {
      name: 'Music & Audio',
      logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg',
    },
    {
      name: 'Programming & Tech',
      logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg',
    },
    {
      name: 'Business',
      logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg',
    },
    {
        name: 'Lifestyle',
        logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg',
    },
    {
        name: 'Data',
        logo: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg',
    },
  ];

  return (
    <div className="fullcards">
        <div className="company-cards">
      <div className="card-explore">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.logo} alt={company.name} width={80} />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CompanyCards;