import React, { Component } from 'react';

class TodoItem extends Component{

    render(){ 
        const todo = this.props.item;
        const idx = this.props.index;
        let str = todo.done ? 'ON' : 'OFF';

        return( 
            <div key={todo.title} className="todo">
                <label>
                    <input type="checkbox" value={idx} onClick={(e)=> this.props.addToList(idx, e.target.checked)} />
                    {todo.title.toUpperCase()} 
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className={ (str === 'ON') ?"btn btn-info btn-xs": "btn btn-danger btn-xs" } onClick={() => this.props.toggleTodo(todo, idx) }> {str} </button>    
                <br/>   
            </div>
        );
    }

}

export default TodoItem;