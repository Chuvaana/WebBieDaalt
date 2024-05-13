import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './KartPayment.css';
import { CartItemsContext } from '../../../../Context/CartItemsContext';

import { Button, DatePicker, Form, Input, InputNumber, ConfigProvider } from 'antd';
import moment from 'moment';
const { MonthPicker} = DatePicker;

const KartPayment = () => {

    const navigate = useNavigate();
    const handleViewAllItems = async () => {
        try {
            await form.validateFields();
            navigate('/success');
        } catch (errorInfo) {
            console.log('Validation failed:', errorInfo);
        }
    };

    const [form] = Form.useForm();
    const cartItems = useContext(CartItemsContext);
    const monthFormat = 'YYYY/MM';

    return (
        <div className="kart_payment_body">
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#DB4444',
                            algorithm: true, 
                        }
                    },
                }}
            >
                <div className="success_order_body">
                    <div className='kart_form'>
                        <h3>Төлбөр төлөх</h3>

                        <Form style={{ width: '80%' }}
                            layout='vertical'
                            form={form}>

                            <Form.Item
                                label="Картын дугаар"
                                name="Картын дугаар"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Картын дугаараа оруулна уу!'
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value = "") {
                                            const isValid = /^\d{16}$/.test(value); // Check if value consists of exactly 16 digits
                                            if (!isValid) {
                                                return Promise.reject("Картын дугаар 16 оронтой тоо байна!");
                                            } else {
                                                return Promise.resolve();
                                            }
                                        }
                                    })
                                ]}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>



                            <Form.Item
                                label="Карт эзэмшигчийн нэр"
                                name="Карт эзэмшигчийн нэр"
                                rules={[
                                    { required: true, message: 'Карт эзэмшигчийн нэрийг оруулна уу!' },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value = "") {
                                            const isValid = /^[a-zA-Z. ]{4,}$/.test(value); // Check if value consists of at least 4 letters or periods
                                            if (!isValid) {
                                                return Promise.reject("Нэр нь 4-өөс дээш оронтой байх!");
                                            } else {
                                                return Promise.resolve();
                                            }
                                        }
                                    })
                                ]}
                            >
                                <Input />
                            </Form.Item>


                            <div className='jus_row'>
                                <Form.Item
                                    label="Дуусах хугацаа"
                                    name="Дуусах хугацаа"
                                    rules={[
                                        { required: true, message: 'Дуусах хугацаа бөглөнө үү!' },
                                    ]}
                                >
                                    <MonthPicker style={{ width: '100%' }} defaultValue={moment('2025/01', monthFormat)} format={monthFormat} />
                                </Form.Item>



                                <Form.Item label="CVV код" name="CVV код"
                                    rules={[
                                        { required: true, message: 'Please input!' },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value = "") {
                                                const isValid = /^\d{3}$/.test(value); // Check if value consists of exactly 16 digits
                                                if (!isValid) {
                                                    return Promise.reject("CVV кодоо шалгана уу");
                                                } else {
                                                    return Promise.resolve();
                                                }
                                            }
                                        })
                                    ]}>
                                    <InputNumber placeholder='CVV' style={{ width: '100%' }} />
                                </Form.Item>
                            </div>



                            <Button htmlType="submit" style={{ width: '100%', height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleViewAllItems}>Төлөх</Button>

                        </Form>
                    </div>
                    <div className="order_info">
                        <h3>Захиалгын мэдээлэл</h3>

                        <div className='order_info_body'>
                            <div className="order_cart_header_in_head">
                                <div className="product_name">БҮТЭЭГДЭХҮҮН</div>
                                <div className="product_number_order">ТОО</div>
                                <div className="product_price_order">ҮНЭ</div>
                            </div>
                            {cartItems.items.length === 0 ? (
                                <div className="cart__empty">Empty cart!</div>
                            ) : (
                                <div className="product_list_infos">
                                    {cartItems.items.map((item) => (

                                        <div className="product_infos">
                                            <div className="product_name">{item.name}</div>
                                            <div className="product_number_order">{item.itemQuantity}</div>
                                            <div className="product_price_order">{item.itemQuantity * item.price}₮</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className='order_info_body_add'>
                                <div className="infos">
                                    <div className="front_content_baraa">Барааны нийт үнэ</div>
                                    <div className="back_content_baraa">{cartItems.totalAmount}.00₮</div>
                                </div>
                                <div className="infos">
                                    <div className="front_content">Хүргэлт</div>
                                    <div className="back_content_order">8000.00₮</div>
                                </div>
                                <div className="infos">
                                    <div className="front_content">Төлбөрийн төрөл</div>
                                    <div className="back_content_order">Банкаар шилжүүлэх</div>
                                </div>
                                <div className="infos">
                                    <div className="front_content_baraa">НИЙТ ДҮН</div>
                                    <div className="back_content_baraa">{cartItems.totalAmount + 8000}.00₮</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </div >
    );
}

export default KartPayment