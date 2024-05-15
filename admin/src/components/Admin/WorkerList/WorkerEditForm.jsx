import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddWorkerForm = (props) => {
  const [formData, setFormData] = useState({
    deliver_ovog: "",
    deliver_name: "",
    deliver_rd: "",
    deliver_phone: "",
    deliver_email: "",
    deliver_address: "",
    deliver_date: "",
    deliver_type: "",
    deliver_username: "",
    deliver_admin: false,
    deliver_password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (props.item) {
      setFormData({
        deliver_ovog: props.item.deliver_ovog || "",
        deliver_name: props.item.deliver_name || "",
        deliver_rd: props.item.deliver_rd || "",
        deliver_phone: props.item.deliver_phone || "",
        deliver_email: props.item.deliver_email || "",
        deliver_address: props.item.deliver_address || "",
        deliver_date: props.item.deliver_date ? new Date(props.item.deliver_date).toISOString().split("T")[0] : "",
        deliver_type: props.item.deliver_type || "",
        deliver_username: props.item.deliver_username || "",
        deliver_admin: props.item.deliver_admin || false,
        deliver_password: props.item.deliver_password || "",
      });
    }
  }, [props.item]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      const response = await axios.put(`http://localhost:5000/api/worker/${props.item._id}`, formData);
      console.log(response.data);

      // Reset form data after successful submission
      setFormData({
        deliver_ovog: "",
        deliver_name: "",
        deliver_rd: "",
        deliver_phone: "",
        deliver_email: "",
        deliver_address: "",
        deliver_date: "",
        deliver_type: "",
        deliver_username: "",
        deliver_admin: false,
        deliver_password: "",
      });

      navigate("/workerlist");
    } catch (error) {
      console.error("Error updating worker:", error);
    }
  };

  return (
    <div className="workeradd_main">
      <h2>Ажилтны мэдээлэл засах</h2>
      <form className="workeradd_body" onSubmit={handleSubmit}>
        <div className="input_header_first">
          <div>
            <label>Овог :</label>
            <br />
            <input
              type="text"
              name="deliver_ovog"
              value={formData.deliver_ovog}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Нэр :</label>
            <br />
            <input
              type="text"
              name="deliver_name"
              value={formData.deliver_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input_header_two">
          <div>
            <label>Емайл :</label>
            <br />
            <input
              type="email"
              name="deliver_email"
              value={formData.deliver_email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Утас :</label>
            <br />
            <input
              type="text"
              name="deliver_phone"
              value={formData.deliver_phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input_header_three">
          <div>
            <label>РД :</label>
            <br />
            <input
              type="text"
              name="deliver_rd"
              value={formData.deliver_rd}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Ажилтан орсон огноо :</label>
            <br />
            <input
              type="date"
              name="deliver_date"
              value={formData.deliver_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input_header_other">
          <div>
            <label>Гэрийн хаяг :</label>
            <br />
            <input
              type="text"
              name="deliver_address"
              value={formData.deliver_address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Төлөв :</label>
            <br />
            <select
              name="deliver_type"
              value={formData.deliver_type}
              onChange={handleChange}
              required
            >
              <option value="">Ажилтны төлөв</option>
              <option value="Идэвхтэй">Идэвхтэй</option>
              <option value="Идэвхгүй">Идэвхгүй</option>
            </select>
          </div>
          <div>
            <label>Нэвтрэх нэр :</label>
            <br />
            <input
              type="text"
              name="deliver_username"
              value={formData.deliver_username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Нэвтрэх нууц үг :</label>
            <br />
            <input
              type="text"
              name="deliver_password"
              value={formData.deliver_password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Админ эрх :</label>
            <br />
            <input
              type="checkbox"
              name="deliver_admin"
              checked={formData.deliver_admin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btn_subtim">
          <button className="submit_s" type="submit">Өөрчлөх</button>
        </div>
      </form>
    </div>
  );
};

export default AddWorkerForm;
