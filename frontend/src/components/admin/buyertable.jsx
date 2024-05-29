
import '../css/button.css';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const users = [
  {
    buyerid: '220100001',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    title: 'Software engineer',
    status: 'Active',
    statusColor: 'success',
  },
  {
    buyerid: '220100002',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    name: 'Alex Ray',
    email: 'alex.ray@gmail.com',
    title: 'Consultant',
    status: 'Offline',
    statusColor: 'warning',
  },
  {
    buyerid: '220100003',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    title: 'Designer',
    status: 'Active',
    statusColor: 'success',
  },
];

export default function App() {
  return (
<div>
    <center><h1 className='fw-bold '>BUYER PROFILE</h1></center>
    <MDBTable align='middle' triped hover>
      <MDBTableHead>
        <tr className='table-dark'>
        <th scope="col">Buyer ID</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
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
              <MDBBadge color={user.statusColor} pill>
                {user.status}
              </MDBBadge>
            </td>
            
             <td>
            <button className="buttondelete" role="button">Delete</button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}

