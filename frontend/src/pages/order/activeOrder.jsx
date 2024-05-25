//import React from 'react';

const orders = [
  { id: 1, title: "I will create a professional logo for your business", price: 450, dueIn: "9d, 10h", status: "In Progress" },
  { id: 2, title: "web developer", price: 450, dueIn: "12d, 1h", status: "In Progress" },
  { id: 3, title: "Photo Editor", price: 450, dueIn: "13d, 13h", status: "In Progress" },
  { id: 4, title: "web developer", price: 450, dueIn: "12d, 1h", status: "In Progress" },
  { id: 5, title: "Graphic designer", price: 450, dueIn: "12d, 1h", status: "In Progress" },
  { id: 6, title: "web developer", price: 450, dueIn: "12d, 1h", status: "In Progress" },
  { id: 7, title: "web developer", price: 450, dueIn: "12d, 1h", status: "In Progress" },
];

const OrderTable = () => {
  return (
    <div style={{ width: '80%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>Active Orders - {orders.length} (${orders.length * 450})</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Title</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Due In</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f4f4f4', textAlign: 'left' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>${order.price}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{order.dueIn}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <span style={{
                  padding: '5px 10px',
                  borderRadius: '5px',
                  color: 'white',
                  backgroundColor: order.status === 'In Progress' ? '#007bff' : 'gray'
                }}>
                  {order.status}
                </span>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <button style={{
                  padding: '5px 10px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
