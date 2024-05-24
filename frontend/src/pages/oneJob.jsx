// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import Propic from "./../assets/jobPost/propic.jpg";
import Gig from "./../assets/jobPost/img1.jpg";
<<<<<<< HEAD
import PromoPackage from './../components/promoPackage';


=======
import Review from "./../components/review";
>>>>>>> de56230ecb172de3e3738ea9bbbb26cf142d5479

export default function jobPost() {
  return (
    <div>
      <Navbar/>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10px', marginTop:'70px'}} >
        <div style={{ textAlign: 'left' }}>
          <h3>I will design modern minimalist luxury business logo design.</h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Propic}
            alt="Profile Picture"
            style={{
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              objectFit: 'cover',
              marginRight: '10px'
            }}
          />
          <p>James Anderson</p>
        </div>
 </div>
 <main style={{ padding: '10px' }}>
            <div className="container py-7">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card mb-4 " style={{alignItems:'center'}}>
                            <div className="card-body">
                                <img src={Gig} className="img-thumbnail" alt="..." style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card mb-4" style={{ backgroundColor: '#e3e9fc' }}>
                          
                            <div>
                            <PromoPackage/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">About Job Post</h4>
                                <div className="review">
                                    <h6>WELCOME TO MY LOGO GIG!</h6>
                                    <p>100% Client satisfaction and professional designs!</p>
                                    <p>If you are searching for minimal, unique and professional logo design for your business, you are on the right place!</p>
                                    <p>Get this extra offer and make your business great again 3 LOGO PROPOSAL + UNLIMITED REVISIONS + BUSINESS CARDS + SOCIAL MEDIA FILES + LIFETIME INBOX SUPPORT FOR BEST PRICE ON FIVERR!</p>
                                    <p>All that with 24/7 Support!</p>
                                    <p>Benefits from working with me:</p>
                                    <ul>
                                        <li>100% CLIENT SATISFACTION</li>
                                        <li>FAST AND QUALITY SERVICE</li>
                                        <li>FRIENDLY AND PROFESSIONAL DESIGNER</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
< Review/>

      <Footer/>
    </div>
  )
}

       
    



