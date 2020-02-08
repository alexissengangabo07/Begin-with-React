import React, { Component } from 'react';
import TodoItem from './todoItem';
class List extends Component{
    constructor(props){
        super();
        this.state = {
            selectedTodo : []
        }
    }

    toggleTodo(todo, index){
        console.log('Todo Clicked, '+ todo);
        this.props.onTodoToggle(todo, index);
    }

    showTodo(todos){
        return(
            todos.map( (todo, idx) => {     
                return( 
                    <TodoItem 
                        item={todo} index={idx} 
                        key={todo.title+''+idx} 
                        toggleTodo={this.toggleTodo.bind(this)}
                        addToList={this.addToList.bind(this)}
                    /> 
                );
            })
        )
    }

    addToList(index, booleen){
        let _todo = this.props.todos[index];

        if(booleen){
            if(this.state.selectedTodo.indexOf(_todo) === -1){
                this.setState({
                    selectedTodo: [...this.state.selectedTodo, _todo]
                });
            }
        }
        else{
            let _list = this.state.selectedTodo;
            _list.splice(index, 1);
            this.setState({
                selectedTodo: _list
            });
        }
    }

    traiter(){
        let list_a_traiter = this.state.selectedTodo;
        list_a_traiter.forEach(item => item.done = !item.done);
        this.setState({
            selectedTodo: list_a_traiter
        });
    }

    render(){
        let afficher = this.state.selectedTodo.length > 0;
        return(
            <div>
                <div> 
                    <br/>
                    {afficher ? <button onClick={this.traiter.bind(this)}>Traiter</button> : null}    <br/>
                    Liste : [{this.props.todos.length}]
                    { this.showTodo(this.props.todos) } 
                </div>
            </div>
        );
    }

}

export default List;