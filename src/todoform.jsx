import React, { Component } from 'react';

class TodoForm extends Component{
    onclick(e){
        e.preventDefault();
        if(this.aliasTexteSaisi.value !== ''){
            const txt = this.aliasTexteSaisi.value;
            this.aliasTexteSaisi.value = '';

            this.props.onNewTodo({
                title: txt,
                done: false,
                createdAt: new Date()
            });
        }
    }

    render(){
        return(
            <div>
                <form>
                    <hr/>
                    <input type="text" ref={(champs) => this.aliasTexteSaisi = champs} placeholder="Enter an item .."/>
                    <button onClick={this.onclick.bind(this)}> Ajouter </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;