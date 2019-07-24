import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './ToDoItems.css'

export class ToDoItems extends Component {
    getStyle = () =>{
        return {
            color: '#FF3374',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            backgroundColor: '#EAEDED',
            textDecoration: this.props.passTodolist.completed ? 'line-through': 'none',
            textDecorationColor : 'black',
        }
    }
    buttoneStyle = () =>{
        return{
            background: "#ff0000",
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '35%',
            cursor: 'pointer',
            float: 'right',
            fontSize: '15px',
        }
    }
    render() {
        // Destructuring 
        const {id, title}  = this.props.passTodolist;
        return (
            <div style = { this.getStyle() }>
                <p>
                    <input style = {itemStyle} type = "checkbox" onChange = {this.props.passMarkComplete.bind(this, id)}>
                    </input>
                    { title } 
                    <button style = {this.buttoneStyle()} 
                    onClick = {this.props.passDeleteTodolist.bind(this, id)}>X
                    </button>
                </p>
            </div>
        )
    }
}
// PropTypes
ToDoItems.propTypes ={
    passTodolist : PropTypes.object.isRequired
}
const itemStyle = {
    padding: '20px'
}
export default ToDoItems;
