import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <AllRoutes></AllRoutes>
       <Footer></Footer>
        
    </div>
  );
}

export default App;
