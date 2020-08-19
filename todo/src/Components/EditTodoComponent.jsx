import React, { Component } from 'react';
import moment from 'moment';
import TodoService from '../Services/TodoService';
import FormTodoInput from './FormTodoInput';

class EditTodoComponent extends Component {
    state = {
        id: this.props.match.params.id,
        username: "tbg", // AuthService.getUsername()
        description: "",
        isDone: false,
        dateComp: moment(new Date()).format("YYYY-MM-DD") // pattern to *capture*, *not* the output format
    }

    onSubmit = (values) => {
        console.log(values);

        const todoObj = {
            id: this.state.id,
            username: this.state.username,
            description: values.description,
            dateComp: values.dateComp
        };

        if(this.state.id < 0) {
            TodoService.create(this.state.username, todoObj)
                .then( (resp) => this.props.history.push("/todos") )
                .catch( e => console.log(e));
        }
        else {
            TodoService.updateById(this.state.username, this.state.id, todoObj)
                .then( () => this.props.history.push(`/todos`))
                .catch( e => console.log(e));
        }
    }

    validate(values) {
        let errors = {};
        
        if(!values.description) {
            errors.description = "Please enter a Description.";
        }
        else if(values.description.length < 2) {
            errors.description = "Description must be at least 2 characters.";
        }

        if(!moment(values.dateComp).isValid())
            errors.dateComp = "Please enter a valid Completion Date.";

        return errors;
    }

    componentDidMount() {
        console.log("componentDidMount()");

        // id is passed as string ("-1")
        // so double equal-sign should work
        // but triple equal-sign doesn't
        if(this.state.id < 0) {
            return;
        }
        else {
            TodoService.findById(this.state.username, this.state.id)
                .then( resp => {
                    console.log(resp.data);
    
                    this.setState(
                        {
                            description: resp.data.description,
                            dateComp: moment(resp.data.dateComp).format("YYYY-MM-DD")
                        })
                });

        }
    }

    render() {
        console.log("render()");
        console.log(this.state);

        return (
            <div>
                <h1>{Number(this.props.match.params.id) > -1 ? "To-Do #" + this.props.match.params.id : "New To-Do Item"}</h1>

                <FormTodoInput
                    initialDescription={this.state.description}
                    initialDateComp={this.state.dateComp}
                    onSubmit={this.onSubmit}
                    validate={this.validate} />
            </div>
        );
    }
}

export default EditTodoComponent;