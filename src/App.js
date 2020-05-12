import React, {Component} from 'react';
import Main from './components/Main';
import './App.css';
import{Button} from "antd";



export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    userName:'Emilia'
  }
}




 render(){
   const { userName }=this.state;

  return (
    <div className="App-container">
      <header className="App-container">
       
       <Main userName={userName}/>

      </header>
    </div>
  );
}
}

