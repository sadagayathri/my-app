import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Todolist from './Todolist'
import RefTodolist from './RefTodolist';
import Ipl from './Ipl';
import React from 'react';
import Comli from './Comli';
import Ipl2 from './Ipl2';
import Todocolor from './Todocolor'
import Todolistrender from './Todolistrender';
// import Todolist2 from './Todolist2';

function App() {
  
  return (
   <div className="mybox">
    {console.log("app component")}
    <h1>Welcome to edupoly</h1>

     <Counter></Counter>
    <Todolist></Todolist>
    <RefTodolist></RefTodolist>
    <Comli></Comli>
    <Ipl2 title='Mumbai Indians' players={['Rohit','Surya','kishan','bhumra','david']}></Ipl2>
    <Ipl2 title='Sunrises Hyderabad' players={['williansom','manish','bhumvi','warner','karan']}></Ipl2>
    <Ipl2 title='Chennai superkings' players={['Dhoni','raina','jadeja','warner','karan']}></Ipl2>
    <Ipl2 title='Royal Challengers Banglore' players={['williansom','manish','bhumvi','warner','karan']}></Ipl2>
    {/* <Todolistcolor name='clear bills' c='red'></Todolistcolor>
    <Todolistcolor name='Moksha School' c='green'></Todolistcolor>
    <Todolistcolor name='Manas Bus Fee' c='red'></Todolistcolor>
    <Todolistcolor name='Gold Bill' c='red'></Todolistcolor>
    <Todolistcolor name='Current Bill' c='green'></Todolistcolor> */}
    <Todocolor></Todocolor>
    <Todolistrender></Todolistrender>
   </div>
  );
}

export default App;
