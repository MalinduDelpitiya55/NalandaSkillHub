
import '../components/css/button.css';
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const users = [
  {
    buyerid: '777100001',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will do outstanding logo design, branding kit and website',
    review: 'Exceptional work by gig_villa!! Exceeded my expectations with their expertise, professionalism, and dedication. I am extremely pleased with the overall experience',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
  },
  {
    buyerid: '777100002',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will do outstanding logo design, branding kit and website',
    review: 'The seller exceeded expectations by delivering exceptional work ahead of schedule. I highly recommend this seller and will definitely be a repeat customer.',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    name: 'Alex Ray',
    email: 'alex.ray@gmail.com',
  },
  {
    buyerid: '777100003',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will design kickass mascot cartoon twitch esports and gaming logo',
    review: 'Seller delivered exceptional service with top-quality results. Their communication was clear and timely, ensuring a smooth and efficient process. Highly recommend!!',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
  },
];

export default function App() {
  return (
<div>
    <center><h1 className='fw-bold '>RATING AND REVIEW</h1></center>
    <MDBTable align='middle' triped hover>
      <MDBTableHead>
        <tr className='table-dark'>
        <th scope="col">Rating ID</th>
          <th scope="col">Gig Title</th>
          <th scope="col">Review</th>
          <th scope="col">Buyer Name</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>
            <p className='fw-normal mb-1'>{user.buyerid}</p>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src={user.gigimg}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-1'
                />
                <div className='ms-3'>
                    <p className='fw-normal mb-1'>{user.title}</p>
                </div>
              </div>
            </td>
            <td>
            <p className='fw-normal mb-1'>{user.review}</p>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src={user.imgSrc}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{user.name}</p>
                  <p className='text-muted mb-0'>{user.email}</p>
                </div>
              </div>
            </td>
            
           
            
             <td>
             <button className="buttonaccept" role="button">Accept</button>
            <button className="buttondelete" role="button">Reject</button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}

