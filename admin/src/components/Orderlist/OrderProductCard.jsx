import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import './orderproductCartlol.css'

const ItemCard = (props) => {
    const navigate = useNavigate();
    const { item } = props;
    const formattedDate = new Date(item.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Use 24-hour format
    });

    const [newStatus, setNewStatus] = useState(item.delivery_status);

    // OrderProductCard.jsx

    const handleStatusChange = async () => {
        try {
            // Send a PATCH request to update the delivery status
            const result = await axios.patch('http://localhost:5000/api/order/changeStatus', { orderId: item._id, delivery_status: newStatus });
            // If successful, you can update the local state or trigger a re-fetch of data
            console.log(result.data);
            if (result.data.message === 'Delivery status updated successfully') {
                console.log('Delivery status updated successfully');
                message.success("Амжилттай өөрчиллөө");
                navigate('/');
                // Add any further actions you want to take upon successful status update
            } else {
                console.log('Failed to update delivery status');
                // Handle the case where the status update was not successful
            }
        } catch (error) {
            // Handle errors
            console.error('Error updating delivery status:', error);
        }
    };



    const handleStatusInputChange = (event) => {
        setNewStatus(event.target.value);
    };

    return (
        <div className="data_body_products_detail">
            <h1>Захиалгын дэлгэрэнгүй</h1>
            <div className="body_product_card">
                <table style={{width:'100%'}}>
                    <tbody>
                        <tr>
                            <td>
                                <label>Код</label>
                            </td>
                            <td >
                                <p>{props.item._id && props.item._id.substring(20, 24)}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Дүүрэг</label>
                            </td>
                            <td>
                                <p>{props.item.deliver_loc_District}</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label>Хороо</label>
                            </td>
                            <td>
                                <p>{props.item.deliver_loc_Committee}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Нэмэлт мэдээлэл</label>
                            </td>
                            <td>
                                <p>{props.item.deliver_location}</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label>Барааны нэр</label>
                            </td>
                            <td>
                                <p>{props.item.product ? props.item.product.map(product => product.name).join(', ') : ''}</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label>И-мэйл</label>
                            </td>
                            <td>
                                <p>{props.item.deliver_email}</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label>Утасны дугаар</label>
                            </td>
                            <td>
                                <p>{props.item.deliver_phone}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Нийт үнийн дүн</label>
                            </td>
                            <td >
                                <p>{props.item.order_all_price}</p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <label>Хугацаа</label>
                            </td>
                            <td>
                                <p>{formattedDate}</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>Төлөв</label>
                            </td>
                            <td>
                                <p>{item.delivery_status}</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <select value={newStatus} onChange={handleStatusInputChange}>
                                    <option value="Хүргэгдсэн">Хүргэгдсэн</option>
                                    <option value="Хүргэлтэнд гарсан">Хүргэлтэнд гарсан</option>
                                </select>
                            </td>
                            <td>
                                <button className="change_btnd" onClick={handleStatusChange}>Шинэ төлөв</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ItemCard;
