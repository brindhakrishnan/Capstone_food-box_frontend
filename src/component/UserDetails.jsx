import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { Component } from 'react'
import UserAPI from '../services/UserAPI'
import AuthenticationService from './AuthenticationService'

export default class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // id: 4,
            // firstname: 'Mike',
            // lastname: 'Ross',
            // email: 'mike.ross@gmail.com',
            // phone: '8067549860',
            // password: 'welcomeross',
            // accountstatus: 1
            id: '',
            firstname: '',
            lastname: '',
            email: this.props.match.params.email,
            phone: '',
            password: '',
            accountstatus: 1
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        //       let username = AuthenticationService.getLoggedInUsername()
        UserAPI.executeUserByEmail(this.state.email)
            .then(response => this.setState({
                id: response.data.id,
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                email: response.data.email,
                phone: response.data.phone,
                password: response.data.password,
                accountstatus: response.data.accountstatus
            }))
    }



    onSubmit(values) {

        let userdetails = {
            id: parseInt(this.state.id),
            firstname: values.firstname,
            lastname: values.lastname,
            email: this.state.email,
            phone: values.phone,
            password: this.state.password,
            accountstatus: parseInt(this.state.accountstatus)
        }
        console.log("onSubmit call")
        console.log(userdetails)

        UserAPI.updateUser(this.state.email, userdetails)
            .then(() => this.props.history.push('/users'))
    }

    validate(values) {
        let errors = {}
        if (!values.firstname) {
            errors.firstname = 'Enter the First Name'
        } else if (!values.lastname) {
            errors.lastname = 'Enter the Last Name'
        } else if (values.phone.length < 10) {
            errors.phone = 'Enter atleast 10 numbers for phone'
        }

        return errors

    }

    render() {
        let { id, firstname, lastname, email, phone, accountstatus } = this.state
        return (
            <div className="container">
                <Formik
                    initialValues={{ id, firstname, lastname, email, phone, accountstatus }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="firstname" component="div"
                                    className="alert alert-warning" />
                                <ErrorMessage name="lastname" component="div"
                                    className="alert alert-warning" />
                                <ErrorMessage name="phone" component="div"
                                    className="alert alert-warning" />
                                {/* <ErrorMessage name="accountstatus" component="div"
                                    className="alert alert-warning" /> */}
                                <fieldset className="form-group">
                                    <label>First Name</label>
                                    <Field className="form-control" type="text" name="firstname" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Last Name</label>
                                    <Field className="form-control" type="text" name="lastname" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Phone</label>
                                    <Field className="form-control" type="tel" name="phone" />
                                </fieldset>
                                {/* <fieldset className="form-group">
                                    <label>Account Status</label>
                                    <Field className="form-control" type="text" name="accountstatus" />
                                    {/* <div id="accountstatus">Account Status</div>
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <label>
                                            <Field type="radio" name="accountstatus" value="0" />
                                            0
                                        </label>
                                        <label>
                                            <Field type="radio" name="accountstatus" value="1" checked />
                                            1
                                        </label>

                                    </div> 
                                </fieldset> */}
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        )
    }
}
