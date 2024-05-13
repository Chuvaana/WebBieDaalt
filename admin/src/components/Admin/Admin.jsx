import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
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

  const navigate = useNavigate();
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

      navigate('/productlist');
      // Add any additional handling here, such as redirecting to a success page
    } catch (error) {
      console.error('Error adding item:', error);
      // Handle error, display error message to the user, etc.
    }
  };

  return (
    <div className="product_add_main">
      <form onSubmit={handleSubmit}>
        <div className="product_body_first">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        </div>
        <div className="product_body_two">
          <input type="text" name="color" placeholder="Color" value={formData.color} onChange={handleChange} />
          <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
        </div>
        <div className="product_body_three">
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
          <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} />

        </div>
        <div className="product_descr">
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="product_hig_qua">
          <input type="text" name="highlights" placeholder="Highlights" value={formData.highlights} onChange={handleChange} />
          <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
        </div>
        <div className="product_sale">
          <label>
            Sale:
            <input type="checkbox" name="sale" checked={formData.sale} onChange={() => setFormData({ ...formData, sale: !formData.sale })} />
          </label>
          {formData.sale && <div className="prod_sale" > <input type="number" style={{ margin: '15px 0px  ', width: '330px', height: '50px'}} name="saleAmount" placeholder="Sale Amount" value={formData.saleAmount} onChange={handleChange} /> </div>}
        </div>
        <div className="product_image">
          <input type="file" name="images" multiple onChange={handleImageChange} />
        </div>
        <div className="product_btn">
          <Link to="/productlist">
          <button className="cancel_s" type="submit">Цуцлах</button>
          </Link>
          <button type="submit">Хадгалах</button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
