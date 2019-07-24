import React, { Component } from 'react';
import ToDoItems from './ToDoItems'
import PropTypes from 'prop-types';
class Todo extends Component {
    
    render() { 
        console.log(this.props.Todo)
        return (
            this.props.todolist.map((todo) => (
                <ToDoItems key = {todo.id} passTodolist = {todo} passMarkComplete = {this.props.markComplete}
                passDeleteTodolist= {this.props.passDelete}/>
            ))
            );
    }
}

Todo.propTypes = {
    todolist: PropTypes.array.isRequired
}
 
export default Todo;