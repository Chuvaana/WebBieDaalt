import React from "react";
import success from './success.png'
import './Success_payment.css'
import { useNavigate } from "react-router-dom";
import { Button, ConfigProvider } from 'antd';
import { CartItemsContext } from '../../../../Context/CartItemsContext';
import { useEffect, useContext } from "react";

const SuccessPayment = () => {
    const navigate = useNavigate();
    const cartItemsContext = useContext(CartItemsContext);

    useEffect(() => {
        // Clear cart when the component mounts (SuccessPayment component is loaded)
        cartItemsContext.clearCart();
    }, [cartItemsContext]); // Dependency array ensures this effect runs only once when the component mounts

    const handleViewAllItems = async () => {
        navigate('/');
    };
    return (
        <div className="success_payment_frame">
            <div className="success_payment">
                <div className="success_photo">
                    <img src={success}></img>
                </div>
                <div className="success_word">
                    <h1>Амжилттай!</h1>
                </div>
                <div className="success_detail">
                    <h2>Таны захиалга амжилттай баталгаажлаа.</h2>
                </div>
                <div className="launch_trans">
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
                        <Button htmlType="submit" style={{height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleViewAllItems}>Нүүр хуудас руу шилжих</Button>

                    </ConfigProvider>
                </div>
            </div>
        </div>
    )
};


export default SuccessPayment;