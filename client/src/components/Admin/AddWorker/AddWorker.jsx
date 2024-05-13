import React, { useState } from 'react';
import axios from 'axios';
import './addworker.css'

const AddWorkerForm = () => {
    const [formData, setFormData] = useState({
        deliver_ovog: '',
        deliver_name: '',
        deliver_rd: '',
        deliver_phone: '',
        deliver_email: '',
        deliver_address: '',
        deliver_date: '',
        deliver_type: '',
        deliver_username: '',
        deliver_password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/worker/add', formData);
            console.log(response.data);
            // Reset form data after successful submission
            setFormData({
                deliver_ovog: '',
                deliver_name: '',
                deliver_rd: '',
                deliver_phone: '',
                deliver_email: '',
                deliver_address: '',
                deliver_date: '',
                deliver_type: '',
                deliver_username: '',
                deliver_password: ''
            });
            // Handle success message or redirect user if needed
        } catch (error) {
            console.error('Error adding worker:', error);
            // Handle error message or show error to the user
        }
    };

    return (
        <div className="workeradd_main">
            <h2>Хүргэлтийн ажилтан</h2>
            <form className="workeradd_body" onSubmit={handleSubmit}>
                <div className="input_header_first">
                    <div>
                        <label>Овог :</label><br />
                        <input type="text" name="deliver_ovog" value={formData.deliver_ovog} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Нэр :</label><br />
                        <input type="text" name="deliver_name" value={formData.deliver_name} onChange={handleChange} required />
                    </div>
                </div>
                <div className="input_header_two">
                    <div>
                        <label>Емайл :</label><br />
                        <input type="email" name="deliver_email" value={formData.deliver_email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Утас :</label><br />
                        <input type="text" name="deliver_phone" value={formData.deliver_phone} onChange={handleChange} required />
                    </div>
                </div>
                <div className="input_header_three">
                    <div>
                        <label>РД :</label><br />
                        <input type="text" name="deliver_rd" value={formData.deliver_rd} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Ажилтан орсон огноо :</label><br />
                        <input type="date" name="deliver_date" value={formData.deliver_date} onChange={handleChange} required />
                    </div>
                </div>
                <div className="input_header_other">
                    <div>
                        <label>Гэрийн хаяг :</label><br />
                        <input type="text" name="deliver_address" value={formData.deliver_address} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Төлөв :</label><br />
                        <select name="deliver_type" value={formData.deliver_type} onChange={handleChange} required>
                            <option value="">Select Type</option>
                            <option value="standard">Standard</option>
                            <option value="express">Express</option>
                            <option value="next_day">Next Day</option>
                        </select>
                        </div>
                    <div>
                        <label>Нэвтрэх нэр :</label><br />
                        <input type="text" name="deliver_username" value={formData.deliver_username} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Нэвтрэх нууц үг :</label><br />
                        <input type="text" name="deliver_password" value={formData.deliver_password} onChange={handleChange} required />
                    </div>
                </div>
                <div className="btn_subtim">
                    <button type="submit" style={{ width: '200px', height: '50px', borderStyle: 'none', backgroundColor: '#DF4444' , color:'white' }}>Add Worker</button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkerForm;
