import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/product/Product';


function App() {
  return (
    <div className="App">


     <AllRoutes />
     {/* <Product/> */}
     <Dashboard/>

    </div>
  );
}

export default App;
