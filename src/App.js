import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import DaasPlatform from './components/DaasPlatform';
import Solution from './components/Solution';
import Product from './components/Product';
function App() {

  return (
    <>
       <Navbar/> 

      {/* <Banner/>
      <DaasPlatform />  */}
      {/* <Solution /> */}
      <Product />
      <Footer/>
      
      
    </>
  );
}

export default App;
