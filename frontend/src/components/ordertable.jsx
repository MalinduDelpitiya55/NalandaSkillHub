
import '../components/css/button.css';
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const users = [
  {
    buyerid: '888100001',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will do outstanding logo design, branding kit and website',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    simgSrc: 'https://mdbootstrap.com/img/new/avatars/11.jpg',
    sname: 'ruwan',
    semail: 'ruwan125@gmail.com',
  },
  {
    buyerid: '888100002',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will do outstanding logo design, branding kit and website',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    name: 'Alex Ray',
    email: 'alex.ray@gmail.com',
    simgSrc: 'https://mdbootstrap.com/img/new/avatars/12.jpg',
    sname: 'ruwan',
    semail: 'ruwan125@gmail.com',
  },
  {
    buyerid: '888100003',
    gigimg: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
    title: 'I will design kickass mascot cartoon twitch esports and gaming logo',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    simgSrc: 'https://mdbootstrap.com/img/new/avatars/10.jpg',
    sname: 'kamal',
    semail: 'kamal54@gmail.com',
  },
];

export default function App() {
  return (
<div>
    <center><h1 className='fw-bold '>ORDERS</h1></center>
    <MDBTable align='middle' triped hover>
      <MDBTableHead>
        <tr className='table-dark'>
        <th scope="col">Order ID</th>
          <th scope="col">Gig Title</th>
          <th scope="col">Seller Name</th>
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
              <div className='d-flex align-items-center'>
                <img
                  src={user.simgSrc}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{user.sname}</p>
                  <p className='text-muted mb-0'>{user.semail}</p>
                </div>
              </div>
            </td>
             <td>
             <button className="buttonadd" role="button">View</button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}

