import React, {Component} from 'react';
import Main from './components/Main';
import './App.css';
import{Button} from "antd";



export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    userName:'Emilia',
    products: [
      {
        id: 'prod01',
        name: 'notebook',
        brand: 'Asus',
        price: 19000
      },
      {
        id: 'prod02',
        name: 'zapatillas',
        brand: 'Nike',
        price: 3500
      },
      {
        id: 'prod03',
        name: 'juego de ps4',
        brand: 'Dark Souls',
        price: 5000
      }
    ],
  }
}




 render(){
   const { userName, products }=this.state;

  return (
    <div className="App-container">
      <header className="App-container">
       
       <Main userName={userName} products={products}/>

      </header>
    </div>
  );
}
}

