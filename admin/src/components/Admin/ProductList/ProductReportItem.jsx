import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./productlist.css";
import { message } from "antd";

const ItemCard = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    color: "",
    type: "",
    description: "",
    price: "",
    size: "",
    highlights: "",
    quantity: "",
    sale: false,
    saleAmount: "",
    images: [], // This will hold the selected image files
  });

  useEffect(() => {
    setFormData({
      name: props.item.name || "",
      category: props.item.category || "",
      color: props.item.color || "",
      type: props.item.type || "",
      description: props.item.description || "",
      price: props.item.price || "",
      size: props.item.size.join(", ") || "",
      highlights: props.item.highlights.join(", ") || "",
      quantity: props.item.quantity || "",
      sale: props.item.sale || false,
      saleAmount: props.item.saleAmount || "",
      images: [], // This will hold the selected image files
    });
  }, [props.item]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (let key in formData) {
        if (key === "images") {
          formData[key].forEach((image) => {
            formDataToSend.append("images", image);
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
      const response = await axios.put(
        `http://localhost:5000/api/items/${props.item._id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      message.success("Амжилттай өөрчиллөө");
      navigate("/productlist");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="product_add_main">
      <form onSubmit={handleSubmit}>
        <div className="product_body_first">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="product_body_two">
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div className="product_body_three">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="size"
            placeholder="Size (comma-separated)"
            value={formData.size}
            onChange={handleChange}
          />
        </div>
        <div className="product_descr">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="product_hig_qua">
          <input
            type="text"
            name="highlights"
            placeholder="Highlights (comma-separated)"
            value={formData.highlights}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="product_sale">
          <label>
            Sale:
            <input
              type="checkbox"
              name="sale"
              checked={formData.sale}
              onChange={handleCheckboxChange}
            />
          </label>
          {formData.sale && (
            <div className="prod_sale">
              <input
                type="number"
                style={{ margin: "15px 0px", width: "330px", height: "50px" }}
                name="saleAmount"
                placeholder="Sale Amount"
                value={formData.saleAmount}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <div className="product_image">
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="product_btn">
          <button type="submit">Өөрчлөх</button>
        </div>
      </form>
    </div>
  );
};

export default ItemCard;
