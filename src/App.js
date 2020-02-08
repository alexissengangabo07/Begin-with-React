import React, { Component } from 'react';
import './App.css';
import List from './liste';
import TodoForm from './todoform';
import Welcome from './Welcome';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            valeurchamps: []
        };
    }
    onNewTodo(todo){
        let val = this.state.valeurchamps;
        val.push(todo)
        this.setState({
            valeurchamps: val,
        });
    }
    toggleTodoState(todo, index){
        // console.log(todo, index);
        let _todo = todo;
        _todo.done = !todo.done;
        let newtodo = this.state.valeurchamps;
        newtodo[index] = _todo;
        this.setState({
            valeurchamps: newtodo
        });
    }
    render(){
        return (
            <div align="center" style={styles.body}>
                <Welcome name="Alex" js="JS"/>
                <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
                <List todos={this.state.valeurchamps} onTodoToggle={this.toggleTodoState.bind(this)} />
            </div>
        );
    }
}
let styles = {
    body: {
        fontFamily: 'sans-serif'
    }
}
export default App;