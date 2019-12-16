import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Input'
import Input from './components/Input' 
import Button from './components/Button'

export default class App extends React.Component {
  render(){
  return (
    <div>
      <Button/>
      <Button/>
      <Button/>
      <Input/>
    </div>
  );
  }
}


