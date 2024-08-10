// src/App.js
 // eslint-disable-next-line 
import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import Table from "./component/Table";
import "./component/Form.css";

const App = () => {
  const [data, setData] = useState(() => {
    // Load data from localStorage when the app is initialized
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const addData = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData)); // Update localStorage
  };

  const editData = (index) => {
    // Handle the editing logic here
    const selectedData = data[index];
    console.log("Edit data at index:", index, selectedData);
    // You can populate the form with the selected data and update it
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData)); // Update localStorage
  };

  return (
    <div className="App">
      <h1>CRUD Form Application</h1>
      <Form onSubmit={addData} />
      <Table data={data} onEdit={editData} onDelete={deleteData} />
    </div>
  );
};

export default App;
