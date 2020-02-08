import React, { Component } from 'react';
import logo from './logo.svg';

class Welcome extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            userInput: '',
            items: []
        }
    }

    addOne(){
        if(this.state.count < 20){
            this.setState({
                count: this.state.count + 1
            });
        }
    }
    deductOne(){
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            });
        }
    }
    changement(e){
        this.setState({
            userInput: e.target.value
        });
    }
    addTodo(e){
        e.preventDefault();
        if(this.state.userInput !== ''){
            this.setState({
                items: [...this.state.items, this.state.userInput.toUpperCase()],
                userInput: '' 
            });
        }
    }
    
    renderToDos(){
        return this.state.items.map((items) => {
            return(
                <div key={items} className="list-group-item">
                    <br/>
                    {items} &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={this.deleteToDo.bind(this)} className="btn btn-danger">X</button>
                </div>
            );
        });
    }

    deleteToDo(e){
        e.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(e.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    render() {
        return ( 
            <div align="center">
                <div className="well">
                    <img src={logo} height="50" alt="logo react"/>
                    <h1 style={{fontWeight: 'bold'}}>{this.props.name}, Welcome To React {this.props.js}</h1>
                    <p className="text-success" style={styles.counter}>My Counter : {this.state.count}</p>
                    <button onClick={this.deductOne.bind(this)} className="btn btn-danger" style={{borderRadius: 50, padding: 10, outline: 0}}>
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => this.addOne()} className="btn btn-success" style={{borderRadius: 50, padding: 10, outline: 0}}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
                <hr/>
                <h2>TodoList</h2>
                <form>
                    <input 
                        type="text" 
                        value={this.state.userInput} 
                        placeholder="Enter an item .." 
                        onChange={this.changement.bind(this)}
                        className="input-lg"
                        style={styles.input}
                    />
                    <button style={styles.btn} onClick={this.addTodo.bind(this)} className="btn btn-info btn-lg">
                        Valider
                    </button>
                </form>
                <div className="list-group">
                    {this.renderToDos()}
                </div>
            </div>
        );
    }
}

const styles = {
    counter: {
        fontSize: 25,
        color: 'orange',
        fontWeight: 'bold'
    },
    btn: {
        marginTop: -5,
        marginLeft: -15,
        paddingBottom: 11,
        borderRadius: 1
    },
    input: {
        outline: 'none', 
        border: '1px solid gray',
        borderRight:'none',
        borderRadius: 1
    }
}

export default Welcome;