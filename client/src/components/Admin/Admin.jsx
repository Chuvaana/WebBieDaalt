import React, { useState } from 'react';
import axios from 'axios';
import './AddItemForm.css'
const AddItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    color: '',
    type: '',
    description: '',
    price: '',
    size: '',
    highlights: '',
    quantity: '',
    sale: false,
    saleAmount: '',
    images: null // This will hold the selected image files
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: e.target.files[0] }); // Assuming you're selecting only one image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:5000/api/items/add', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
      // Add any additional handling here, such as redirecting to a success page
    } catch (error) {
      console.error('Error adding item:', error);
      // Handle error, display error message to the user, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="text" name="color" placeholder="Color" value={formData.color} onChange={handleChange} />
      <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} />
      <input type="text" name="highlights" placeholder="Highlights" value={formData.highlights} onChange={handleChange} />
      <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
      <label>
        Sale:
        <input type="checkbox" name="sale" checked={formData.sale} onChange={() => setFormData({ ...formData, sale: !formData.sale })} />
      </label>
      {formData.sale && <input type="number" name="saleAmount" placeholder="Sale Amount" value={formData.saleAmount} onChange={handleChange} />}
      <input type="file" name="images" onChange={handleImageChange} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
