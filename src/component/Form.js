import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = ({handleSubmitForm,data,countries}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: {
      city: '',
      district: '',
      province: '',
      country: 'Nepal', // Default Value
    },
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  // const [countries, setCountries] = useState([]);


  // For Country Fetch()
  useEffect(() => {
    
    if(data){
      setFormData(data)
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/png') {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: file,
      }));
      setErrors((prevErrors) => ({ ...prevErrors, profilePicture: '' }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        profilePicture: 'Only PNG files are allowed',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{7,}$/.test(formData.phone)) newErrors.phone = 'Phone number must be at least 7 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.length > 0) {
      const existingData = JSON.parse(localStorage.getItem('data')) || [];
      console.log(existingData.find((each) => each.email))
      existingData[4] = existingData.find((each) => each.email)
      localStorage.setItem('data', JSON.stringify([...existingData,existingData[4] ]));

    }else{
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Store data in localStorage
      const existingData = JSON.parse(localStorage.getItem('data')) || [];
      localStorage.setItem('data', JSON.stringify([...existingData, formData]));
      handleSubmitForm()
      // Clear form
      setFormData({
        sn:"",
        name: '',
        email: '',
        phone: '',
        dob: '',
        address: {
          city: '',
          district: '',
          province: '',
          country: 'Nepal',
        },
        profilePicture: null,
      });
    }}
  };

  return (
    <div className='main'>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='name'>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className='email'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='contact'>
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className='date'>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>

        <div className='address'>
          <label>City:</label>
          <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} />
        </div>

        <div className='address'>
          <label>District:</label>
          <input type="text" name="district" value={formData.address.district} onChange={handleAddressChange} />
        </div>

        <div className='address'>
          <label>Province:</label>
          <select name="province" value={formData.address.province} onChange={handleAddressChange}>
            <option value="">Select Province</option>
            <option value="1">Province 1</option>
            <option value="2">Province 2</option>
            <option value="3">Province 3</option>
            <option value="4">Province 4</option>
            <option value="5">Province 5</option>
            <option value="6">Province 6</option>
            <option value="7">Province 7</option>
          </select>
        </div>

        <div className='address'>
          <label>Country:</label>
          <select name="country" value={formData.address.country} onChange={handleAddressChange}>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className='img'>
          <label>Profile Picture:</label>
          <input type="file" accept=".png" onChange={handleFileChange} />
          {errors.profilePicture && <p>{errors.profilePicture}</p>}
        </div>

        <button type="submit" className='submit-btn'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
