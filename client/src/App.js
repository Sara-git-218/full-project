import logo from './logo.svg';
import CompA1 from './Components/compA1';
import CompA2 from './Components/compA2';
import CompA3 from './Components/compA3';
import CompA4 from './Components/compA4';
import './App.css';

function App() {
  return (
    <div className="App">
      <CompA1/>
      <CompA2/> 
      <CompA3/> 
      <CompA4 str={"sara"}/> 
      <CompA4 str={"heinemann"}/> 
      
    </div>
  );
}

export default App;
