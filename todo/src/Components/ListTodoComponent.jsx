import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoService from '../Services/TodoService';
import AuthService from '../Services/AuthService';

class TodoComponent extends Component {

    state = {       
        username: "tbg", // AuthService etc
        todos: []
    }

    formatDate(date) {
        const dd = new Date(date);
        return `${dd.getMonth()+1}/${dd.getDate()}/${dd.getFullYear()}`;
    }

    deleteTodoHandler(username, id) {
        TodoService.deleteById(username, id)
            .then( resp => {
                console.log(resp.data);
                this.refreshContent(username)
            });       
    }

    refreshContent(username) {
        AuthService.setupAxiosInterceptors();

        TodoService.findAll(username)
            .then(resp => {
                console.log(resp);
                this.setState({ todos: resp.data })
            })
            .catch( e => console.log(e)); ;
    }

    updateTodoHandler(id) {
        this.props.history.push(`/todos/${id}`);
    }

    createTodoHandler = () => {
        this.props.history.push("/todos/-1");
    }
  
    componentDidMount() {
        this.refreshContent(this.state.username);
    }

    render() {
        return (
            <>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done?</th>
                        <th>Target Completion</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.sort( (a,b) => a.id - b.id).map( (tt, index) => {
                        return (<tr key={index}>
                            <td>
                                <Link to={`/todos/${tt.id}`}>{tt.description}</Link>
                            </td>
                            <td>{tt.isDone ? "Yes" : "No"}</td>
                            <td>{this.formatDate(tt.dateComp)}</td>
                            <td>
                                <button 
                                    className="btn btn-warning"
                                    onClick={ () => this.deleteTodoHandler(this.state.username, tt.id)}>
                                    
                                    Delete
                                </button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div className="row">
                <button className="btn btn-success" onClick={this.createTodoHandler}>Add New</button>
            </div>
            </>
        );
    }
}

export default TodoComponent;