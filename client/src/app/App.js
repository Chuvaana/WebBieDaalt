import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../routes/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';
import Shop from '../components/Shop/Shop';
import ItemView from '../routes/ItemView';
import CategoryView from '../routes/CategoryView';
import SearchView from '../routes/Search';
import CartItemsProvider from '../Context/CartItemsProvider';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import Wishlist from '../components/Wishlist';
import Cart from '../components/Card/Cart/Cart';
import WishItemsProvider from '../Context/WishItemsProvider';
import DrawerNav from '../components/Nav/DrawerNav/DrawerNav';
import Checkout from '../components/Checkout/Checkout';
import SearchProvider from '../Context/SearchProvider';
import AddItemForm from '../components/Admin/Admin.jsx'
import Addworker from '../components/Admin/AddWorker/AddWorker.jsx'
import Resetpass from '../components/ResetPass/ResetPass.js';
import Changepass from '../components/Change/Changepass.js';
import SaleItems from '../components/SaleItems/SaleItems.js';
import Ring from '../components/Categories/Ring.js';
import Productlist from '../components/ProductList/Productlist.jsx';
import Workerlist from '../components/Admin/WorkerList/Workerlist.jsx';
import Orderlist from '../components/Orderlist/Orderlist.jsx';
import Bracelet from '../components/Categories/Bracelet.js';
import Earings from '../components/Categories/Earrings.js';
import Necklaces from '../components/Categories/Necklaces.js';
import ViewAll from '../components/Featured/ViewAll/ViewAll.js';
import Scarf from '../components/Categories/Scarf.js';
import Bag from '../components/Categories/Bag.js';
import Hat from '../components/Categories/Hats.js';
import Maskchain from '../components/Categories/Maskchain.js';
import Sets from '../components/Categories/Sets.js';
import Sunglasses from '../components/Categories/Sunglasses.js';
import Contact from '../components/Footer_menu_items/Contact.jsx';
import Delivery_form from '../components/Card/Delivery/Delivery_form.js';
import KartPayment from '../components/Card/PaymentType/KartPayment/KartPayment.js';
import BankPayment from '../components/Card/PaymentType/BankPayment/BankPayment.js';

function App() {

  return (
   <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router >
            <Header />
            <Routes>
              <Route index element={<Home />}/>
              <Route path="/account">
                <Route path="me" element={<MyAccount/>}/>
                <Route path="admin" element={<AddItemForm/>}/>
                <Route path="manage" element={<ManageAccount/>}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="password_reset" element={<Resetpass />}/>
                <Route path="changepass" element={<Changepass />}/>
                <Route path="*" element={<Login />}/>
              </Route>

              <Route path="/shop" element={<Shop />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/addworker" element={<Addworker />}/>
              <Route path="/productlist" element={<Productlist />} />
              <Route path="/workerlist" element={<Workerlist />} />
              <Route path="/orderlist" element={<Orderlist />} />
              <Route path="/category">
                <Route path=":id" element={<CategoryView />}/>
              </Route>
              <Route path="/item">
                <Route path='sale' element={<SaleItems/>}></Route>
                <Route path='viewAll' element={<ViewAll/>}></Route>
                <Route path='ring' element={<Ring/>}></Route>
                {/* <Route path='bracelet' element={<Bracelet/>}></Route> */}
                {/* <Route path='earrings' element={<Earings/>}></Route> */}
                {/* <Route path='necklaces' element={<Necklaces/>}></Route> */}
                {/* <Route path='scarf' element={<Scarf/>}></Route> */}
                {/* <Route path='bag' element={<Bag/>}></Route> */}
                {/* <Route path='hat' element={<Hat/>}></Route> */}
                {/* <Route path='maskchain' element={<Maskchain/>}></Route> */}
                {/* <Route path='sets' element={<Sets/>}></Route> */}
                {/* <Route path='sunglasses' element={<Sunglasses/>}></Route> */}
                <Route path="/item/men">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/women">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/kids">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/featured">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/ring">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/delivery_form" element={<Delivery_form />} />
              <Route path="/kart_payment" element={<KartPayment />} />
              <Route path="/bank_payment" element={<BankPayment />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search/*" element={<SearchView />} />
            </Routes>
            <Footer />
            <Routes>
            <Route path="/admin" element={<Wishlist />} />
              {/* <Route path="addworker" element={<Addworker />}/> */}
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
   </CartItemsProvider>
  );
}

export default App;