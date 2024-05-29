import 'bootstrap/dist/css/bootstrap.min.css';
import JobPostImg1 from './../../assets/jobPost/img1.jpg';
import JobPostImg2 from './../../assets/jobPost/img2.jpg';
import JobPostImg3 from './../../assets/jobPost/img3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const CardList = () => {
  const cardData = [
    {
      imgSrc: JobPostImg1,
      profileImgSrc: JobPostImg1,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will design modern minimalist luxury business logo design.',
      price: 'Rs39393',
      link: '/onejobpost',
    },
    {
      imgSrc: JobPostImg2,
      profileImgSrc: JobPostImg2,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will design a professional sponsorship proposal, business proposal, and letter.',
      price: 'Rs39393',
      link: '#',
    },
    {
      imgSrc: JobPostImg3,
      profileImgSrc: JobPostImg1,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will create minimal and luxury logo design.',
      price: 'Rs39393',
      link: '#',
    },
    {
      imgSrc: JobPostImg1,
      profileImgSrc: JobPostImg1,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will design modern minimalist luxury business logo design.',
      price: 'Rs39393',
      link: '/onejobpost',
    },
    {
      imgSrc: JobPostImg2,
      profileImgSrc: JobPostImg2,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will design a professional sponsorship proposal, business proposal, and letter.',
      price: 'Rs39393',
      link: '#',
    },
    {
      imgSrc: JobPostImg3,
      profileImgSrc: JobPostImg1,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will create minimal and luxury logo design.',
      price: 'Rs39393',
      link: '#',
    },
    {
      imgSrc: JobPostImg1,
      profileImgSrc: JobPostImg1,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will design modern minimalist luxury business logo design.',
      price: 'Rs39393',
      link: '/onejobpost',
    },
    {
      imgSrc: JobPostImg2,
      profileImgSrc: JobPostImg2,
      profileName: 'James Anderson',
      location: 'United Kingdom',
      rating: 4.8,
      description: 'I will design a professional sponsorship proposal, business proposal, and letter.',
      price: 'Rs39393',
      link: '#',
    },
    
    // Add more card data objects here...
  ];

  return (
    <div style={{ marginTop: "70px" }}>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            background: #ecececdb;
          }
          
          .cardfooter-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
            max-width: 80%;
            margin: 0 auto;
            padding: 20px;
            gap: 20px;
          }
          
          .cardfooter-list .cardfooter-item {
            background: #fff;
            padding: 6px;
            border-radius: 8px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
            list-style: none;
            cursor: pointer;
            text-decoration: none;
            border: 2px solid transparent;
            transition: border 0.5s ease;
          }
          
          .cardfooter-list .cardfooter-item:hover {
            border: 2px solid #000;
          }
          
          .cardfooter-list .cardfooter-item img {
            width: 100%;
            aspect-ratio: 16/9;
            border-radius: 8px;
            object-fit: cover;
          }
          
          .cardfooter-item h3 {
            color: #000;
            font-size: 15px;
            margin-top: 28px;
            font-weight: 400;
          }

          .text {
            height: 80px;
          }
          .profileName {
            margin-top: -30px;
          }

          hr {
            border: none;
            height: 2px;
            background-color: black; 
            width: 100%; 
            margin-top: 50px auto;
            margin-bottom: 20px;
          }
          
          .cardfooter {
            display: flex;
            justify-content: space-between;
            align-items: center;  
          }
          
          .amt {
            color: black;
            font-weight: bold;
          }
          
          #heart {
            width: 25px;
            height: 20px;
          }
          
          @media (max-width: 1200px) {
            .cardfooter-list .cardfooter-item {
              padding: 15px;
            }
          }
          
          @media screen and (max-width: 980px) {
            .cardfooter-list {
              margin: 0 auto;
            }
          }
        `}
      </style>
      <div>
        <center><h2>Most popular Gigs</h2></center>
      </div>
      <div className="cardfooter-list">
        {cardData.map((card, index) => (
          <a key={index} href={card.link} className="cardfooter-item">
            <img src={card.imgSrc} alt="Card Image" />
            <div>
              <img
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  objectFit: "cover",
                  marginTop: "20px",
                }}
                src={card.profileImgSrc}
                alt="Profile Picture"
              />
              <div className="profileName" style={{ color: "darkblue" }}>
                <p style={{ textAlign: "end", margin: "0" }}>{card.profileName}</p>
                <p style={{ textAlign: "end" }}>
                  {card.location} <span className="profile rating">{card.rating}</span>
                </p>
              </div>
            </div>
            <div className="text">
              <h3>{card.description}</h3>
            </div>
            <hr />
            <div className="cardfooter">
              <p>
                <FontAwesomeIcon icon={faHeartRegular} style={{ color: "black" }} />
              </p>
              <span className="amt">{card.price}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardList;
