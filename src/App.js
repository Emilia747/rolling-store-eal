import React, {Component} from 'react';
import Main from './pages/Main';
import Results from './pages/Results';
import './App.css';
import{Button} from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import{firebaseApp} from './firebase';



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
    results:[],
    term:''
  }
}

updateTerm (term) {
  this.setState({term})
}

updateList(newList, term){
  const {products}= this.state;
  term !==''?
  this.setState({
    results: newList,
    term
  }):
  this.setState({ results:products})
}


 render(){
   const { userName, products, term, results }=this.state;
   const updateTerm= this.updateTerm.bind(this);
   const updateList= this.updateList.bind(this);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App-container">
            <Main 
            userName={userName} 
            products={products}
            updateTerm={updateTerm}
            term={term}
            updateList={updateList}
            />
          </div>
        </Route>
        <Route path="/results">
          <div className="App-container">
            <Results 
            userName={userName} 
            results={results}
            products={products}
            term={term}
            />
          </div>
        </Route>
      </Switch>
    </Router>

    
    
  );
}
}

