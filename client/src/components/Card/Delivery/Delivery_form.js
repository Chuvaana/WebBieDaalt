import { useState, useEffect, useContext } from "react";
import { CartItemsContext } from '../../../Context/CartItemsContext';

import { Button, Form, Input, Select, Space, InputNumber, Radio, ConfigProvider } from 'antd';
import { useNavigate } from "react-router-dom";
import './Delivery_form.css';
import DeliveryCartCard from "./DeliveryCartCard/DeliveryCartCard";

const { Option } = Select;

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

    { id: 85, name: "1-р хороо", value: "1-р хороо", country: "Налайх" },
    { id: 86, name: "2-р хороо", value: "2-р хороо", country: "Налайх" },
    { id: 87, name: "3-р хороо", value: "3-р хороо", country: "Налайх" },
    { id: 88, name: "4-р хороо", value: "4-р хороо", country: "Налайх" },
    { id: 89, name: "5-р хороо", value: "5-р хороо", country: "Налайх" },
    { id: 90, name: "6-р хороо", value: "6-р хороо", country: "Налайх" },
    { id: 91, name: "7-р хороо", value: "7-р хороо", country: "Налайх" },
    { id: 92, name: "8-р хороо", value: "8-р хороо", country: "Налайх" },

    { id: 93, name: "1-р хороо", value: "1-р хороо", country: "Сонгинохайрхан" },
    { id: 94, name: "2-р хороо", value: "2-р хороо", country: "Сонгинохайрхан" },
    { id: 95, name: "3-р хороо", value: "3-р хороо", country: "Сонгинохайрхан" },
    { id: 96, name: "4-р хороо", value: "4-р хороо", country: "Сонгинохайрхан" },
    { id: 97, name: "5-р хороо", value: "5-р хороо", country: "Сонгинохайрхан" },
    { id: 98, name: "6-р хороо", value: "6-р хороо", country: "Сонгинохайрхан" },
    { id: 99, name: "7-р хороо", value: "7-р хороо", country: "Сонгинохайрхан" },
    { id: 100, name: "8-р хороо", value: "8-р хороо", country: "Сонгинохайрхан" },
    { id: 101, name: "9-р хороо", value: "9-р хороо", country: "Сонгинохайрхан" },
    { id: 102, name: "10-р хороо", value: "10-р хороо", country: "Сонгинохайрхан" },
    { id: 103, name: "11-р хороо", value: "11-р хороо", country: "Сонгинохайрхан" },
    { id: 104, name: "12-р хороо", value: "12-р хороо", country: "Сонгинохайрхан" },
    { id: 105, name: "13-р хороо", value: "13-р хороо", country: "Сонгинохайрхан" },
    { id: 106, name: "14-р хороо", value: "14-р хороо", country: "Сонгинохайрхан" },
    { id: 107, name: "15-р хороо", value: "15-р хороо", country: "Сонгинохайрхан" },
    { id: 108, name: "16-р хороо", value: "16-р хороо", country: "Сонгинохайрхан" },
    { id: 109, name: "17-р хороо", value: "17-р хороо", country: "Сонгинохайрхан" },
    { id: 110, name: "18-р хороо", value: "18-р хороо", country: "Сонгинохайрхан" },
    { id: 111, name: "19-р хороо", value: "19-р хороо", country: "Сонгинохайрхан" },
    { id: 112, name: "20-р хороо", value: "20-р хороо", country: "Сонгинохайрхан" },
    { id: 113, name: "21-р хороо", value: "21-р хороо", country: "Сонгинохайрхан" },
    { id: 114, name: "22-р хороо", value: "22-р хороо", country: "Сонгинохайрхан" },
    { id: 115, name: "23-р хороо", value: "23-р хороо", country: "Сонгинохайрхан" },
    { id: 116, name: "24-р хороо", value: "24-р хороо", country: "Сонгинохайрхан" },
    { id: 117, name: "25-р хороо", value: "25-р хороо", country: "Сонгинохайрхан" },
    { id: 118, name: "26-р хороо", value: "26-р хороо", country: "Сонгинохайрхан" },
    { id: 119, name: "27-р хороо", value: "27-р хороо", country: "Сонгинохайрхан" },
    { id: 120, name: "28-р хороо", value: "28-р хороо", country: "Сонгинохайрхан" },
    { id: 121, name: "29-р хороо", value: "29-р хороо", country: "Сонгинохайрхан" },
    { id: 122, name: "30-р хороо", value: "30-р хороо", country: "Сонгинохайрхан" },
    { id: 123, name: "31-р хороо", value: "31-р хороо", country: "Сонгинохайрхан" },
    { id: 124, name: "32-р хороо", value: "32-р хороо", country: "Сонгинохайрхан" },
    { id: 125, name: "33-р хороо", value: "33-р хороо", country: "Сонгинохайрхан" },
    { id: 126, name: "34-р хороо", value: "34-р хороо", country: "Сонгинохайрхан" },
    { id: 127, name: "35-р хороо", value: "35-р хороо", country: "Сонгинохайрхан" },
    { id: 128, name: "36-р хороо", value: "36-р хороо", country: "Сонгинохайрхан" },
    { id: 129, name: "37-р хороо", value: "37-р хороо", country: "Сонгинохайрхан" },
    { id: 130, name: "38-р хороо", value: "38-р хороо", country: "Сонгинохайрхан" },
    { id: 131, name: "39-р хороо", value: "39-р хороо", country: "Сонгинохайрхан" },
    { id: 132, name: "40-р хороо", value: "40-р хороо", country: "Сонгинохайрхан" },
    { id: 133, name: "41-р хороо", value: "41-р хороо", country: "Сонгинохайрхан" },
    { id: 134, name: "42-р хороо", value: "42-р хороо", country: "Сонгинохайрхан" },
    { id: 135, name: "43-р хороо", value: "43-р хороо", country: "Сонгинохайрхан" },

    { id: 136, name: "1-р хороо", value: "1-р хороо", country: "Сүхбаатар" },
    { id: 137, name: "2-р хороо", value: "2-р хороо", country: "Сүхбаатар" },
    { id: 138, name: "3-р хороо", value: "3-р хороо", country: "Сүхбаатар" },
    { id: 139, name: "4-р хороо", value: "4-р хороо", country: "Сүхбаатар" },
    { id: 140, name: "5-р хороо", value: "5-р хороо", country: "Сүхбаатар" },
    { id: 141, name: "6-р хороо", value: "6-р хороо", country: "Сүхбаатар" },
    { id: 142, name: "7-р хороо", value: "7-р хороо", country: "Сүхбаатар" },
    { id: 143, name: "8-р хороо", value: "8-р хороо", country: "Сүхбаатар" },
    { id: 144, name: "9-р хороо", value: "9-р хороо", country: "Сүхбаатар" },
    { id: 145, name: "10-р хороо", value: "10-р хороо", country: "Сүхбаатар" },
    { id: 146, name: "11-р хороо", value: "11-р хороо", country: "Сүхбаатар" },
    { id: 147, name: "12-р хороо", value: "12-р хороо", country: "Сүхбаатар" },
    { id: 148, name: "13-р хороо", value: "13-р хороо", country: "Сүхбаатар" },
    { id: 149, name: "14-р хороо", value: "14-р хороо", country: "Сүхбаатар" },
    { id: 150, name: "15-р хороо", value: "15-р хороо", country: "Сүхбаатар" },
    { id: 151, name: "16-р хороо", value: "16-р хороо", country: "Сүхбаатар" },
    { id: 152, name: "17-р хороо", value: "17-р хороо", country: "Сүхбаатар" },
    { id: 153, name: "18-р хороо", value: "18-р хороо", country: "Сүхбаатар" },
    { id: 154, name: "19-р хороо", value: "19-р хороо", country: "Сүхбаатар" },
    { id: 155, name: "20-р хороо", value: "20-р хороо", country: "Сүхбаатар" },

    { id: 156, name: "1-р хороо", value: "1-р хороо", country: "Хан-Уул" },
    { id: 157, name: "2-р хороо", value: "2-р хороо", country: "Хан-Уул" },
    { id: 158, name: "3-р хороо", value: "3-р хороо", country: "Хан-Уул" },
    { id: 159, name: "4-р хороо", value: "4-р хороо", country: "Хан-Уул" },
    { id: 160, name: "5-р хороо", value: "5-р хороо", country: "Хан-Уул" },
    { id: 161, name: "6-р хороо", value: "6-р хороо", country: "Хан-Уул" },
    { id: 162, name: "7-р хороо", value: "7-р хороо", country: "Хан-Уул" },
    { id: 163, name: "8-р хороо", value: "8-р хороо", country: "Хан-Уул" },
    { id: 164, name: "9-р хороо", value: "9-р хороо", country: "Хан-Уул" },
    { id: 165, name: "10-р хороо", value: "10-р хороо", country: "Хан-Уул" },
    { id: 166, name: "11-р хороо", value: "11-р хороо", country: "Хан-Уул" },
    { id: 167, name: "12-р хороо", value: "12-р хороо", country: "Хан-Уул" },
    { id: 168, name: "13-р хороо", value: "13-р хороо", country: "Хан-Уул" },
    { id: 169, name: "14-р хороо", value: "14-р хороо", country: "Хан-Уул" },
    { id: 170, name: "15-р хороо", value: "15-р хороо", country: "Хан-Уул" },
    { id: 171, name: "16-р хороо", value: "16-р хороо", country: "Хан-Уул" },
    { id: 172, name: "17-р хороо", value: "17-р хороо", country: "Хан-Уул" },
    { id: 173, name: "18-р хороо", value: "18-р хороо", country: "Хан-Уул" },
    { id: 174, name: "19-р хороо", value: "19-р хороо", country: "Хан-Уул" },
    { id: 175, name: "20-р хороо", value: "20-р хороо", country: "Хан-Уул" },
    { id: 176, name: "21-р хороо", value: "21-р хороо", country: "Хан-Уул" },
    { id: 177, name: "22-р хороо", value: "22-р хороо", country: "Хан-Уул" },
    { id: 178, name: "23-р хороо", value: "23-р хороо", country: "Хан-Уул" },
    { id: 179, name: "24-р хороо", value: "24-р хороо", country: "Хан-Уул" },
    { id: 180, name: "25-р хороо", value: "25-р хороо", country: "Хан-Уул" },

    { id: 181, name: "1-р хороо", value: "1-р хороо", country: "Чингэлтэй" },
    { id: 182, name: "2-р хороо", value: "2-р хороо", country: "Чингэлтэй" },
    { id: 183, name: "3-р хороо", value: "3-р хороо", country: "Чингэлтэй" },
    { id: 184, name: "4-р хороо", value: "4-р хороо", country: "Чингэлтэй" },
    { id: 185, name: "5-р хороо", value: "5-р хороо", country: "Чингэлтэй" },
    { id: 186, name: "6-р хороо", value: "6-р хороо", country: "Чингэлтэй" },
    { id: 187, name: "7-р хороо", value: "7-р хороо", country: "Чингэлтэй" },
    { id: 188, name: "8-р хороо", value: "8-р хороо", country: "Чингэлтэй" },
    { id: 189, name: "9-р хороо", value: "9-р хороо", country: "Чингэлтэй" },
    { id: 190, name: "10-р хороо", value: "10-р хороо", country: "Чингэлтэй" },
    { id: 191, name: "11-р хороо", value: "11-р хороо", country: "Чингэлтэй" },
    { id: 192, name: "12-р хороо", value: "12-р хороо", country: "Чингэлтэй" },
    { id: 193, name: "13-р хороо", value: "13-р хороо", country: "Чингэлтэй" },
    { id: 194, name: "14-р хороо", value: "14-р хороо", country: "Чингэлтэй" },
    { id: 195, name: "15-р хороо", value: "15-р хороо", country: "Чингэлтэй" },
    { id: 196, name: "16-р хороо", value: "16-р хороо", country: "Чингэлтэй" },
    { id: 197, name: "17-р хороо", value: "17-р хороо", country: "Чингэлтэй" },
    { id: 198, name: "18-р хороо", value: "18-р хороо", country: "Чингэлтэй" },
    { id: 199, name: "19-р хороо", value: "19-р хороо", country: "Чингэлтэй" },
    { id: 200, name: "20-р хороо", value: "20-р хороо", country: "Чингэлтэй" },
    { id: 201, name: "21-р хороо", value: "21-р хороо", country: "Чингэлтэй" },
    { id: 202, name: "22-р хороо", value: "22-р хороо", country: "Чингэлтэй" },
    { id: 203, name: "23-р хороо", value: "23-р хороо", country: "Чингэлтэй" },
    { id: 204, name: "24-р хороо", value: "24-р хороо", country: "Чингэлтэй" }
];

const Delivery_form = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [cityItems, setCityItems] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [addition, setAddition] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [mail, setMail] = useState("");
    const [value, setValue] = useState(1);
    
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const [form] = Form.useForm();

    useEffect(() => {
        setCityItems([]);
        setSelectedCity("");
        selectedCountry &&
            setCityItems(cities.filter((c) => c.country === selectedCountry));
    }, [selectedCountry]);

    const navigate = useNavigate();

    const handleViewAllItems = async () => {
        try {
            // Validate the form
            await form.validateFields();
            const formValues = form.getFieldsValue();
            console.log('Form values:', formValues);

            // If the form is valid, navigate to the appropriate payment page
            if (value === 1) {
                navigate('/bank_payment');
            } else if (value === 2) {

                navigate('/kart_payment');
            }
        } catch (error) {
            // Handle any validation errors
            console.error('Form validation failed:', error);
        }
    };


    const onFinish = (values) => {
        console.log(values);
    };

    const cartItems = useContext(CartItemsContext);

    return (
        <div className="delivery_form_body">
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#DB4444',
                            algorithm: true, // Enable algorithm
                        },
                        Input: {
                            colorPrimary: '#7D7463',
                            algorithm: true, // Enable algorithm
                        },
                        InputNumber: {
                            colorPrimary: '#7D7463',
                            algorithm: true, // Enable algorithm
                        },
                        Select: {
                            colorPrimary: '#7D7463',
                            algorithm: true, // Enable algorithm
                        },
                        Radio: {
                            colorPrimary: '#E72929',
                            algorithm: true, // Enable algorithm
                        }
                    },
                }}
            >
                <div className="d_form_body" >
                    <div className="delivery_address_body">
                        <h2>Хүргэлтийн хаяг</h2>
                        <Form
                            layout="vertical"
                            form={form}
                            onFinish={onFinish}
                            style={{ maxWidth: 600 }}
                        >
                            <Form.Item
                                name="name"
                                label="Нэр"
                                onChange={(value) => setName(value)}
                                rules={[{ required: true, message: 'Нэрээ оруулна уу!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="district"
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
                                name="horoo"
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
                                name="address"
                                label="Хүргүүлэх хаяг"
                                onChange={(e) => setAddress(e.target.value)}
                                rules={[{ required: true, message: 'Хүргүүлэх хаяг оруулна уу!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="addition"
                                label="Нэмэлт мэдээлэл"
                                onChange={(value) => setAddition(value)}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Утасны дугаар"
                                name="phoneNumber"
                                onChange={(value) => setPhoneNumber(value)}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Утасны дугаараа оруулна уу!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value = "") {
                                            const isValid = /^[89]\d{7}$/.test(value);

                                            if (!isValid) {
                                                return Promise.reject("Утасны дугаараа шалгана уу!");
                                            } else {
                                                return Promise.resolve();
                                            }
                                        }
                                    })
                                ]}
                            >
                                <InputNumber
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>



                            <Form.Item
                                name="mail"
                                label="И-мэйл"
                                onChange={(value) => setMail(value)}
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'И-мэйл зөв хаягаа оруулна уу',
                                    },
                                    {
                                        required: true,
                                        message: 'И-мэйл хаягаа оруулна уу!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>

                    <div className="delivery_order_body">
                        <h2>Таны захиалга</h2>
                        {cartItems.items.length === 0 ? (
                            <div className="cart__empty">Empty cart!</div>
                        ) : (
                            <div className="delivery_shop__cart__items">
                                {cartItems.items.map((item) => (
                                    <DeliveryCartCard key={item._id} item={item} />
                                ))}
                            </div>
                        )}
                        <div className="total__amount">
                            <div className="total__amount__label">Барааны нийт үнэ:</div>
                            <div className="total__amount__value">{cartItems.totalAmount}.00₮</div>
                        </div>
                        <div className="total__amount">
                            <div className="total__amount__label">Хүргэлт:</div>
                            <div className="total__amount__value">8000.00₮</div>
                        </div>
                        <div className="total__amount">
                            <div className="total__amount__label">Нийт төлөх дүн:</div>
                            <div className="total__amount__value">{cartItems.totalAmount + 8000}.00₮</div>
                        </div>

                        <div className="type_payment">
                            <Radio.Group onChange={onChange} value={value}>
                                <Space direction="vertical">
                                    <Radio style={{ fontSize: '17px' }} value={1}>Банкаар шилжүүлэх</Radio>
                                    <Radio style={{ fontSize: '17px' }} value={2}>Картаар төлөх</Radio>
                                </Space>
                            </Radio.Group><br></br>
                        </div>
                        <Button style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleViewAllItems}>Төлөх</Button>

                    </div>
                </div>
            </ConfigProvider>
        </div >
    );
};

export default Delivery_form;