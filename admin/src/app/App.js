import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header";
import Addworker from "../components/Admin/AddWorker/AddWorker";
import Addproduct from "../components/Admin/Admin";
// import Orderitemsproduct from '../components/Orderlist/Orderitemsproduct/Orderitemsproduct';

import Login from "../components/Account/Login/Login";
import Register from "../components/Account/Register/Register";
// import Footer from '../components/Footer/Footer';
import Workerlist1 from "../components/Admin/WorkerList/Workerlist1";
import UserList from "../components/Admin/UserList/UserList";
import ProductList1 from "../components/Admin/ProductList/ProductList1";
import OrderList1 from "../components/Orderlist/OrderList1";
import ContactuserList from "../components/Admin/ContactUserlist/ContactUserList";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Footer /> */}
        <Route path="/workerlist" element={<Workerlist1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/productlist" element={<ProductList1 />} />
        <Route path="/userlist" element={<UserList />} />
        {/* <Route path="/orderitemsproduct" element={<Orderitemsproduct />} /> */}
        <Route path="/addworker" element={<Addworker />} />
        <Route path="/contactlist" element={<ContactuserList />} />
        <Route path="/" element={<OrderList1 />} />
      </Routes>
    </Router>
  );
}

export default App;
