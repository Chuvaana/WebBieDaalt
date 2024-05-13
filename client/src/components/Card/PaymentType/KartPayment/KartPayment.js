import './KartPayment.css';
import { useState, useEffect, useContext } from "react";
import { CartItemsContext } from '../../../../Context/CartItemsContext';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
    ConfigProvider
} from 'antd';
const KartPayment = () => {

    const [form] = Form.useForm();
    const handleViewAllItems = () => {
        // navigate('/bank_payment');
    };
    const cartItems = useContext(CartItemsContext);

    return (
        <div className="kart_payment_body">
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#DB4444',

                            algorithm: true, // Enable algorithm
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

                            <Form.Item label="Картын дугаар" style={{ fontSize: '18px' }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Картын дугаараа оруулна уу!'
                                    },
                                    {
                                        type: 'number',
                                        max: '3',
                                        message: 'Картын дугаар буруу байна!'
                                    },
                                ]}>
                                <InputNumber style={{ fontSize: '18px', width: '100%' }} />
                            </Form.Item>
                            <Form.Item label="Карт эзэмшигчийн нэр"
                                rules={[{ required: true, message: 'Please input!' }]}>
                                <Input style={{ fontSize: '18px' }} />
                            </Form.Item>
                            <div className='jus_row'>
                                <Form.Item label="Дуусах хугацаа">
                                    <Input style={{ fontSize: '18px' }} />
                                </Form.Item>
                                <Form.Item label="CVV код">
                                    <InputNumber style={{ fontSize: '18px', width: '100%' }} />
                                </Form.Item>
                            </div>

                            <Form.Item
                                label="Карт эзэмшигчийн нэр"
                                name="Карт эзэмшигчийн нэр"
                                rules={[{ required: true, message: 'Please input!' }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="InputNumber"
                                name="InputNumber"
                                rules={[{ required: true, message: 'Please input!' }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

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

                        <div className='check_payment'>
                            <Button style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleViewAllItems}>Төлбөр шалгах</Button>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </div >
    );
}

export default KartPayment