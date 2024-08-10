import React, { useState } from 'react';
import Table from './Table';

const ParentComponent = () => {
  const [data, setData] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123456789",
      dob: "1990-01-01",
      address: {
        city: "Kathmandu",
        district: "Kathmandu",
        province: "Bagmati",
        country: "Nepal",
      },
    },
    // Add more test data if needed
  ]);

  const handleEdit = (index) => {
    console.log('Edit clicked for index:', index);
    // Add your edit logic here
  };

  const handleDelete = (index) => {
    console.log('Delete clicked for index:', index);
    // Add your delete logic here
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default ParentComponent;
