import './BankPayment.css';
import { useState, useEffect, useContext } from "react";
import { CartItemsContext } from '../../../../Context/CartItemsContext';
import { Button, Form, Input, Select, Space, InputNumber, Radio, ConfigProvider } from 'antd';

const BankPayment = () => {
    function createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    const handleViewAllItems = () => {
        // navigate('/bank_payment');
    };

    const transition_value = createRandomString(6);

    const cartItems = useContext(CartItemsContext);

    return (
        <div className="bank_payment_body">
            <div className='success_order_header'>
                <h4>Баярлалаа. Таны захиалгын мэдээлэл амжилттай үүслээ</h4>
            </div>

            <div className="success_order_body">
                <div className="bank_info">
                    <h3>Банкны мэдээлэл</h3>
                    <div className='bank_info_body'>
                        <div className="infos">
                            <div className="front_content">Банк</div>
                            <div className="back_content">Хаан банк</div>
                        </div>
                        <div className="infos">
                            <div className="front_content">Дансны дугаар</div>
                            <div className="back_content">5302329312</div>
                        </div>
                        <div className="infos">
                            <div className="front_content">Эзэмшигч</div>
                            <div className="back_content">Номин</div>
                        </div>
                        <div className="infos">
                            <div className="front_content">Гүйлгээний утга</div>
                            <div className="back_content_last">{transition_value}</div>
                        </div>
                    </div>
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
                        <div className='check_payment'>
                            <Button style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleViewAllItems}>Төлбөр шалгах</Button>
                        </div>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}

export default BankPayment