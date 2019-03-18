import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { server_url } from '../config';

class TableRow extends Component {
    delete = () => {
        axios.get(server_url + '/business/delete/'+this.props.obj._id)
            .then(res => this.props.remove(this.props.index))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <tr>
            <td>{this.props.obj.person_name}</td>
            <td>{this.props.obj.business_name}</td>
            <td>{this.props.obj.business_gst_number}</td>
            <td><Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link></td>
            <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

export default withRouter(TableRow);
