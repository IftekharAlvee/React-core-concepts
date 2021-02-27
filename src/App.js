import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  let style= {
    color: 'red',
    backgroundColor: 'white'
    
  }
  const adobe = [
    {name:'Photoshop', price: '$99.99' },
    {name: 'Illustrator', price:'$10.12'},
    {name: 'pdf', price:'$2.99'}
  ]

  const productNames = adobe.map(product => product.name)
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter></Counter>
        <User></User>
       <ul>
         {
           adobe.map(product => <li>{product.name}</li>)
         }
       </ul>
        <Products product={adobe[0]}></Products>
        <Products product={adobe[1]}></Products>
      </header>
    </div>
  );
}


function User() {
  const [Users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        { Users.map(user => <li>{user.email}</li>) }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleClicked = () => {
    const newCount = count+1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={handleClicked}>Increase</button>
    </div>
  )
}

function Products(props) {

  const productStyle ={
    border: '2px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  
  const {name, price} =props.product;
  return (
      <div style={productStyle}>
        <h2>{name}</h2>
        <h1>{price}</h1>
        <button>Buy now</button>
      </div>
  )
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
