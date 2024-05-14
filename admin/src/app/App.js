import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Worklist from '../components/Admin/WorkerList/Workerlist';
import Addworker from '../components/Admin/AddWorker/AddWorker';
import Addproduct from '../components/Admin/Admin';
import Orderitemsproduct from '../components/Orderlist/Orderitemsproduct/Orderitemsproduct';
import Orderlist from '../components/Orderlist/Orderlist';
import Productlist from '../components/Admin/ProductList/Productlist';
// import Footer from '../components/Footer/Footer';
import CartItemsProvider from '../Context/CartItemsProvider';
import WishItemsProvider from '../Context/WishItemsProvider';
import SearchProvider from '../Context/SearchProvider';
import Workerlist1 from '../components/Admin/WorkerList/Workerlist1';
function App() {

  return (
   <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router >
            <Header />
            <Routes>
            {/* <Footer /> */}
              <Route path="/workerlist" element={<Workerlist1 />} />
              <Route path="/addproduct" element={<Addproduct />} />
              <Route path="/productlist" element={<Productlist />} />
              <Route path="/orderitemsproduct" element={<Orderitemsproduct />} />
              <Route path="/addworker" element={<Addworker />} />
              <Route path="/orderlist" element={<Orderlist />} />
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
   </CartItemsProvider>
  );
}

export default App;