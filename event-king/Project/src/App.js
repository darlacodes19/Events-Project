import './App.css';
import Form from './components/Form';
import { Header } from './components/Header';
import { Footer } from './components/Footer';



function App() {


  
 
  return (
    
    <div className="App">
       <Header />

      <div className='main-section'>
        <h2 className='main-title'> Explore family frindly events you can count on </h2> 
        <Form /> 
      </div>

      <Footer /> 
      
  </div>


  )}

export default App;
