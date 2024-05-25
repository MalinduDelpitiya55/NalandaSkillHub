
import '../components/css/button.css';
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const users = [
  {
    buyerid: '666100001',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will do outstanding logo design, branding kit and website',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
  },
  {
    buyerid: '666100002',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will do outstanding logo design, branding kit and website',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    name: 'Alex Ray',
    email: 'alex.ray@gmail.com',
  },
  {
    buyerid: '666100003',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will design kickass mascot cartoon twitch esports and gaming logo',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
  },
];

export default function App() {
  return (
<div>
    <center><h1 className='fw-bold '>GIGS</h1></center>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr className='table-dark'>
        <th scope="col">Gig ID</th>
          <th scope="col">Gig Title</th>
          <th scope="col">Seller Name</th>
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
             <button className="buttonadd" role="button">View</button>
            <button className="buttondelete" role="button">Delete</button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}

