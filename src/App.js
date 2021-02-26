import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  let style= {
    color: 'red',
    backgroundColor: 'white'
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Person name="Rubel" naika="Moushumi" ></Person>
        <Person name="Tubel" naika="Toumi"></Person>
        <Person name="Bappa" naika="Tappa"></Person>
        <Person name="Tommy" naika="Nini"></Person>
        <Person name="Vin" naika="Yummy"></Person>
        <Person name="Bangla" naika="Hind"></Person>
      </header>
    </div>
  );
}


function Person(props) {
  return (
    <div style={{border: '2px solid red', margin: '10px', padding:'10px'}}>
      <h1>Nayok: {props.name}</h1>
      <h3>Naika: {props.naika}</h3>
    </div>
  )
}

export default App;
