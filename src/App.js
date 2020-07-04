import React, { Component } from 'react';
import Header from './Header';
import './App.css';

const menu=[
  {
    link:'/articles',
    label:'Article'
  },
  {
    link:'/contacts',
    label:'Contacts'
  },
  {
    link:'posts',
    label:"Posts"
  }
];
 class App extends Component {
   render(){
  return (
    <div>
     <Header  items={menu} />
    </div>
  );
}
 }

export default App;
