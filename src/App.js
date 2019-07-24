import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About'
import Todo from './components/todo';
import AddToDo from './components/addToDo'
import Header from './components/layout/Header'
import uuid from 'uuid';
import './App.css';
class App extends Component {
  state = { 
    todos: [{
        id: uuid.v4(),
        title: 'Eat breakfast',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Eat lunch',
        completed: false       
      },
      {
        id: uuid.v4(),
        title: 'Eat dinner',
        completed: false        
      }
    ]
   }
   // Toggle Complete
   markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todolist => {
      if(todolist.id === id){
        todolist.completed = !todolist.completed
      }
      return (todolist)
    })})
}
deleteButton = (id) => {
  console.log('delete the specific todo list item', id)
  this.setState({todos: [...this.state.todos.filter(todolist => todolist.id !== id)]});
}
// Add to do
passDataToAddToDo = (title) => {
  const newTodo = {
    id : uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}
  render() { 
    console.log(this.state.todos)
    return ( 
      <Router>
         <div className = "container">
          <Header/>
          <Route exact path="/" render = {props => (
            <React.Fragment>
              <AddToDo passDataToAppJS = {this.passDataToAddToDo}></AddToDo>
              <Todo todolist = {this.state.todos} markComplete = {this.markComplete} passDelete = {this.deleteButton}></Todo>
            </React.Fragment>)}>
          </Route>
          <Route path = "/about" component = {About}/>
        </div>
      </Router>
     );
  }
}
 
export default App;

