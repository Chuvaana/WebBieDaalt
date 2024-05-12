import { useState, useEffect } from "react";
import { Button, Form, Input, Select, Space, InputNumber } from 'antd';
import { useNavigate } from "react-router-dom";
import './Delivery_form.css';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const countries = [
    { id: 1, name: "Багануур", value: "Багануур" },
    { id: 2, name: "Багахангай", value: "Багахангай" },
    { id: 3, name: "Баянгол", value: "Баянгол" },
    { id: 4, name: "Баянзүрх", value: "Баянзүрх" },
    { id: 5, name: "Налайх", value: "Налайх" },
    { id: 6, name: "Сонгинохайрхан", value: "Сонгинохайрхан" },
    { id: 7, name: "Сүхбаатар", value: "Сүхбаатар" },
    { id: 8, name: "Хан-Уул", value: "Хан-Уул" },
    { id: 9, name: "Чингэлтэй", value: "Чингэлтэй" }
];
const cities = [
    { id: 1, name: "1-р хороо", value: "1-р хороо", country: "Багануур" },
    { id: 2, name: "2-р хороо", value: "2-р хороо", country: "Багануур" },
    { id: 3, name: "3-р хороо", value: "3-р хороо", country: "Багануур" },
    { id: 4, name: "4-р хороо", value: "4-р хороо", country: "Багануур" },
    { id: 5, name: "5-р хороо", value: "5-р хороо", country: "Багануур" },
    { id: 6, name: "1-р хороо", value: "1-р хороо", country: "Багахангай" },
    { id: 7, name: "2-р хороо", value: "2-р хороо", country: "Багахангай" },

    { id: 8, name: "1-р хороо", value: "1-р хороо", country: "Баянгол" },
    { id: 9, name: "2-р хороо", value: "2-р хороо", country: "Баянгол" },
    { id: 10, name: "3-р хороо", value: "3-р хороо", country: "Баянгол" },
    { id: 11, name: "4-р хороо", value: "4-р хороо", country: "Баянгол" },
    { id: 12, name: "5-р хороо", value: "5-р хороо", country: "Баянгол" },
    { id: 13, name: "6-р хороо", value: "6-р хороо", country: "Баянгол" },
    { id: 14, name: "7-р хороо", value: "7-р хороо", country: "Баянгол" },
    { id: 15, name: "8-р хороо", value: "8-р хороо", country: "Баянгол" },
    { id: 16, name: "9-р хороо", value: "9-р хороо", country: "Баянгол" },
    { id: 17, name: "10-р хороо", value: "10-р хороо", country: "Баянгол" },
    { id: 18, name: "11-р хороо", value: "11-р хороо", country: "Баянгол" },
    { id: 19, name: "12-р хороо", value: "12-р хороо", country: "Баянгол" },
    { id: 20, name: "13-р хороо", value: "13-р хороо", country: "Баянгол" },
    { id: 21, name: "14-р хороо", value: "14-р хороо", country: "Баянгол" },
    { id: 22, name: "15-р хороо", value: "15-р хороо", country: "Баянгол" },
    { id: 23, name: "16-р хороо", value: "16-р хороо", country: "Баянгол" },
    { id: 24, name: "17-р хороо", value: "17-р хороо", country: "Баянгол" },
    { id: 25, name: "18-р хороо", value: "18-р хороо", country: "Баянгол" },
    { id: 26, name: "19-р хороо", value: "19-р хороо", country: "Баянгол" },
    { id: 27, name: "20-р хороо", value: "20-р хороо", country: "Баянгол" },
    { id: 28, name: "21-р хороо", value: "21-р хороо", country: "Баянгол" },
    { id: 29, name: "22-р хороо", value: "22-р хороо", country: "Баянгол" },
    { id: 30, name: "23-р хороо", value: "23-р хороо", country: "Баянгол" },
    { id: 31, name: "24-р хороо", value: "24-р хороо", country: "Баянгол" },
    { id: 32, name: "25-р хороо", value: "25-р хороо", country: "Баянгол" },
    { id: 33, name: "26-р хороо", value: "26-р хороо", country: "Баянгол" },
    { id: 34, name: "27-р хороо", value: "27-р хороо", country: "Баянгол" },
    { id: 35, name: "28-р хороо", value: "28-р хороо", country: "Баянгол" },
    { id: 36, name: "29-р хороо", value: "29-р хороо", country: "Баянгол" },
    { id: 37, name: "30-р хороо", value: "30-р хороо", country: "Баянгол" },
    { id: 38, name: "31-р хороо", value: "31-р хороо", country: "Баянгол" },
    { id: 39, name: "32-р хороо", value: "32-р хороо", country: "Баянгол" },
    { id: 40, name: "33-р хороо", value: "33-р хороо", country: "Баянгол" },
    { id: 41, name: "34-р хороо", value: "34-р хороо", country: "Баянгол" },

    { id: 42, name: "1-р хороо", value: "1-р хороо", country: "Баянзүрх" },
    { id: 43, name: "2-р хороо", value: "2-р хороо", country: "Баянзүрх" },
    { id: 44, name: "3-р хороо", value: "3-р хороо", country: "Баянзүрх" },
    { id: 45, name: "4-р хороо", value: "4-р хороо", country: "Баянзүрх" },
    { id: 46, name: "5-р хороо", value: "5-р хороо", country: "Баянзүрх" },
    { id: 47, name: "6-р хороо", value: "6-р хороо", country: "Баянзүрх" },
    { id: 48, name: "7-р хороо", value: "7-р хороо", country: "Баянзүрх" },
    { id: 49, name: "8-р хороо", value: "8-р хороо", country: "Баянзүрх" },
    { id: 50, name: "9-р хороо", value: "9-р хороо", country: "Баянзүрх" },
    { id: 51, name: "10-р хороо", value: "10-р хороо", country: "Баянзүрх" },
    { id: 52, name: "11-р хороо", value: "11-р хороо", country: "Баянзүрх" },
    { id: 53, name: "12-р хороо", value: "12-р хороо", country: "Баянзүрх" },
    { id: 54, name: "13-р хороо", value: "13-р хороо", country: "Баянзүрх" },
    { id: 55, name: "14-р хороо", value: "14-р хороо", country: "Баянзүрх" },
    { id: 56, name: "15-р хороо", value: "15-р хороо", country: "Баянзүрх" },
    { id: 57, name: "16-р хороо", value: "16-р хороо", country: "Баянзүрх" },
    { id: 58, name: "17-р хороо", value: "17-р хороо", country: "Баянзүрх" },
    { id: 59, name: "18-р хороо", value: "18-р хороо", country: "Баянзүрх" },
    { id: 60, name: "19-р хороо", value: "19-р хороо", country: "Баянзүрх" },
    { id: 61, name: "20-р хороо", value: "20-р хороо", country: "Баянзүрх" },
    { id: 62, name: "21-р хороо", value: "21-р хороо", country: "Баянзүрх" },
    { id: 63, name: "22-р хороо", value: "22-р хороо", country: "Баянзүрх" },
    { id: 64, name: "23-р хороо", value: "23-р хороо", country: "Баянзүрх" },
    { id: 65, name: "24-р хороо", value: "24-р хороо", country: "Баянзүрх" },
    { id: 66, name: "25-р хороо", value: "25-р хороо", country: "Баянзүрх" },
    { id: 67, name: "26-р хороо", value: "26-р хороо", country: "Баянзүрх" },
    { id: 68, name: "27-р хороо", value: "27-р хороо", country: "Баянзүрх" },
    { id: 69, name: "28-р хороо", value: "28-р хороо", country: "Баянзүрх" },
    { id: 70, name: "29-р хороо", value: "29-р хороо", country: "Баянзүрх" },
    { id: 71, name: "30-р хороо", value: "30-р хороо", country: "Баянзүрх" },
    { id: 72, name: "31-р хороо", value: "31-р хороо", country: "Баянзүрх" },
    { id: 73, name: "32-р хороо", value: "32-р хороо", country: "Баянзүрх" },
    { id: 74, name: "33-р хороо", value: "33-р хороо", country: "Баянзүрх" },
    { id: 75, name: "34-р хороо", value: "34-р хороо", country: "Баянзүрх" },
    { id: 76, name: "35-р хороо", value: "35-р хороо", country: "Баянзүрх" },
    { id: 77, name: "36-р хороо", value: "36-р хороо", country: "Баянзүрх" },
    { id: 78, name: "37-р хороо", value: "37-р хороо", country: "Баянзүрх" },
    { id: 79, name: "38-р хороо", value: "38-р хороо", country: "Баянзүрх" },
    { id: 80, name: "39-р хороо", value: "39-р хороо", country: "Баянзүрх" },
    { id: 81, name: "40-р хороо", value: "40-р хороо", country: "Баянзүрх" },
    { id: 82, name: "41-р хороо", value: "41-р хороо", country: "Баянзүрх" },
    { id: 83, name: "42-р хороо", value: "42-р хороо", country: "Баянзүрх" },
    { id: 84, name: "43-р хороо", value: "43-р хороо", country: "Баянзүрх" },
];

const Delivery_form = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [cityItems, setCityItems] = useState([]);

    const [form] = Form.useForm();

    useEffect(() => {
        setCityItems([]);
        setSelectedCity("");
        selectedCountry &&
            setCityItems(cities.filter((c) => c.country === selectedCountry));
    }, [selectedCountry]);

    const navigate = useNavigate();

    const handleViewAllItems = () => {
        navigate('/payment');
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        setSelectedCountry("");
        setSelectedCity("");
    };

    return (
        <div className="delivery_form_body">
            <div className="delivery_address_body">
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item
                        name="Нэр"
                        label="Нэр"
                        rules={[{ required: true, message: 'Нэрээ оруулна уу!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="Дүүрэг"
                        label="Дүүрэг"
                        rules={[{ required: true, message: 'Дүүргээ сонгоно уу!' }]}
                    >
                        <Select
                            value={selectedCountry}
                            onChange={(value) => setSelectedCountry(value)}
                        >
                            {countries.map((country) => (
                                <Option key={country.id} value={country.value}>
                                    {country.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="Хороо"
                        label="Хороо"
                        rules={[{ required: true, message: 'Хороогоо сонгоно уу!' }]}
                    >
                        <Select
                            value={selectedCity}
                            onChange={(value) => setSelectedCity(value)}
                        >
                            {cityItems.map((city) => (
                                <Option key={city.id} value={city.value}>
                                    {city.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="Хүргүүлэх хаяг"
                        label="Хүргүүлэх хаяг"
                        rules={[{ required: true, message: 'Хүргүүлэх хаяг оруулна уу!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Нэмэлт мэдээлэл"
                        label="Нэмэлт мэдээлэл"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Утасны дугаар"
                        name="Утасны дугаар"
                        rules={[
                            {
                                required: true,
                                minlength: "6",
                                maxlength: "6",
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Space>
                            <Button type="primary" htmlType="submit">Submit</Button>
                            <Button htmlType="button" onClick={onReset}>Reset</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>

            <div className="delivery_order_body">
                <Button type='button' onClick={handleViewAllItems}>Payment</Button>
            </div>
        </div>
    );
};

export default Delivery_form;