import Form from "./component/Form"
import Modal from "./component/Modal"
import Table from "./component/Table"
import "./component/Form.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {

  const [data, setData] = useState(() => {
    // Load data from localStorage when the app is initialized
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryList = response.data.map(country => country.name.common);
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
  
    fetchCountries();
  },[])

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData)); // Update localStorage
  };

  const handleSubmitForm =() => {
    const data = JSON.parse(localStorage.getItem('data')) || []
    setData(data)
  }
 
  const handleEdit = (index) => {
    const data = JSON.parse(localStorage.getItem('data'))
    setSelectedItem(data[index])
    setIsModalOpen(true);
  };

  const handleSave = (editedItem) => {
    setData(data?.map(item => item.id === editedItem.id ? editedItem : item));
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

    return(
   <div className="App" style={{position:"relative"}}>
      <h1>CRUD Form Application</h1>
      <div style={{width: "100%", position:"absolute", backgroundColor:"lightblue"}}>
      <Modal
        show={isModalOpen}
        onClose={handleClose}
        item={selectedItem}
        isEdit={true}
      />
      </div>
      <Form countries={countries} handleSubmitForm={handleSubmitForm} isEdit={false}/>
      <Table data={data} onEdit={handleEdit} onDelete={deleteData} />
    </div>
    )
}

export default Homepage

