import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (

    <>
    <AllRoutes/>
    </>

    <div className="App" >
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>

  );
}

export default App;
