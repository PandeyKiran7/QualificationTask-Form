// src/component/Table.js

import React from 'react';

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <h2>User Data</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>City</th>
            <th>District</th>
            <th>Province</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="9">No data available</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                {/* <td>{item.SN}</td> */}
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.dob}</td>
                <td>{item.address.city}</td>
                <td>{item.address.district}</td>
                <td>{item.address.province}</td>
                <td>{item.address.country}</td>
                <td>
                  <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
