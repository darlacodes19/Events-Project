import './App.css';
import { Input } from './services/constants';


function App() {


  async function handleClick () {
    const res = await Input()
    let event = res.data._embedded.events
    console.log(event)
  }
 
  return (
    
    <div className="App">
         <button onClick={handleClick}> Click Me </button> 
  </div>


  )}

export default App;
