import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormTodoInput = props => {
    return (
        <div className="container">
            <Formik 
                initialValues={{description: props.initialDescription, dateComp: props.initialDateComp}}
                onSubmit={props.onSubmit}
                // validateOnBlur={false}
                // validateOnChange={false}
                validate={props.validate}
                enableReinitialize={true}>
                {
                    props => (
                        <Form>
                            <ErrorMessage 
                                className="alert alert-warning" 
                                component="div"
                                name="description" />
                            <ErrorMessage 
                                className="alert alert-warning" 
                                component="div"
                                name="dateComp" />                                        
                            <fieldset className="form-group">
                            <label>Description</label>
                            <Field 
                                className="form-control" 
                                type="text" 
                                name="description" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Completion Date</label>
                                <Field 
                                    className="form-control" 
                                    type="date" 
                                    name="dateComp" />
                            </fieldset>
                            <button className="btn btn-success" type="submit">Save</button>
                        </Form>
                    )
                }
            </Formik>
        </div>        
    );
}

export default FormTodoInput;