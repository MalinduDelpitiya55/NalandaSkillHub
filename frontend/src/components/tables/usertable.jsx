//import React from 'react';
//import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const data = [
  {
    sellerid: '220100001',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    title: 'Software engineer',
    statusColor: 'success',
  },
  {
    sellerid: '220100002',
    name: 'Alex Ray',
    email: 'alex.ray@gmail.com',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    title: 'Consultant',
    statusColor: 'primary',
  },
  {
    sellerid: '220100003',
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    imgSrc: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
    title: 'Designer',
    statusColor: 'warning',
  },
];

export default function App() {
  return (
    <div className=''>
    <MDBTable triped hover align='middle'>
      <MDBTableHead>
        <tr>  
          <th scope="col">Seller ID</th>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.sellerid}</td>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={item.imgSrc}
                  alt=""
                  style={{ width: '45px', height: '45px' }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{item.name}</p>
                  <p className="text-muted mb-0">{item.email}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">{item.title}</p>
            </td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Viwe
              </MDBBtn>
              <MDBBtn color="link" rounded size="sm">
                Update
              </MDBBtn>
              <MDBBtn color="link" rounded size="sm">
                Delete
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}
