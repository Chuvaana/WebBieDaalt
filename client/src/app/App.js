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
import WishItemsProvider from '../Context/WishItemsProvider';
import DrawerNav from '../components/Nav/DrawerNav/DrawerNav';
import Checkout from '../components/Checkout/Checkout';
import SearchProvider from '../Context/SearchProvider';
import AddItemForm from '../components/Admin/Admin.jsx'
import Resetpass from '../components/ResetPass/ResetPass.js';
import Changepass from '../components/Change/Changepass.js';
import SaleItems from '../components/SaleItems/SaleItems.js';
import Ring from '../components/Categories/Ring.js';
import Bracelet from '../components/Categories/Bracelet.js';
import Earings from '../components/Categories/Earrings.js';
import Necklaces from '../components/Categories/Necklaces.js';

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
              <Route path="/category">
                <Route path=":id" element={<CategoryView />}/>
              </Route>
              <Route path="/item">
                <Route path='sale' element={<SaleItems/>}></Route>
                <Route path='ring' element={<Ring/>}></Route>
                <Route path='bracelet' element={<Bracelet/>}></Route>
                <Route path='earrings' element={<Earings/>}></Route>
                <Route path='necklaces' element={<Necklaces/>}></Route>
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
              </Route>
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search/*" element={<SearchView />} />
            </Routes>
            <Footer />
            <Routes>
            <Route path="/admin" element={<Wishlist />} />
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
   </CartItemsProvider>
  );
}

export default App;