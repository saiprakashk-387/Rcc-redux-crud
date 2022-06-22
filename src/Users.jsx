import React, { Component } from "react";
import { connect } from "react-redux";
import {
    createUserAction,
    deleteUserAction,
    getAllUsersAction,
    updateUserAction,
} from "./redux/actions";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: "",
            },
        };
        // console.log(props);
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user };
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser });

    };
    handleClear = () => {
        this.setState({
            id: 0,
            fname: "",
            lname: "",
            email: "",
        })
    };

    hanldeCreate = () => {
        this.props.createUser(this.state.user);
        this.handleClear()
    };
    getAllUsersDetails = () => {
        this.props.dispatch(getAllUsersAction());
    };
    handleDelete = (user) => {
        this.props.deleteUser(user);
    };
    handleEdit = (user, i) => {
        console.log("hiuser");
        this.setState({
            i: user.i,
            fname: user.fname,
            lname: user.lname,
            email: user.email
            // fname: user.fname,lname:user.lname,email:user.email, index: i 
        })
    }
    handleUpdate = () => {
        let info = {
            obj: { fname: this.state.fname },
               };
        this.props.updateUser(info);
        // console.log("fjdhgjhm");
    };
    render() {
        return (
            <div>
                <h2> CRUD  Redux</h2>
                <form>
                    <label htmlFor="fname">First Name :</label>
                    <input
                        type="text"
                        name="fname"
                        value={this.state.fname}
                        onChange={(e) => { this.handleChange(e); }}
                        autoComplete="off"
                    />
                    <br />
                    <label htmlFor="fname">Last Name :</label>
                    <input
                        type="text"
                        name="lname"
                        value={this.state.lname}
                        onChange={(e) => { this.handleChange(e); }}
                        autoComplete="off"
                    />
                    <br />
                    <label htmlFor="fname">Email :</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => { this.handleChange(e); }}
                        autoComplete="off"
                    />
                    <br />
                    <button type="button" onClick={this.hanldeCreate}> Add User </button>
                    {/* <button type="button" onClick={this.handleClear}> Clear </button> */}
                    <button onClick={this.handleUpdate}>Update</button>
                </form>
                <br />
                {/* <button onClick={this.getAllUsersDetails}>Get Users</button> */}
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users &&
                            this.props.users.map((user, i) => {
                                return <tr key={i}>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => { this.handleEdit(user, i) }}>Edit User</button>
                                        <button onClick={() => { this.handleDelete(user) }}>Delete User</button>
                                    </td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => dispatch(getAllUsersAction()),
        deleteUser: (user) => dispatch(deleteUserAction(user)),
        createUser: (user) => dispatch(createUserAction(user)),
        updateUser: (user) => dispatch(updateUserAction(user)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);