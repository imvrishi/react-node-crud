import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/business')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    tabRow = () => {
        return this.state.business.map((object, i) => {
            return <TableRow obj={object} index={i} key={i} remove={this.deleteRow} />;
        });
    }

    deleteRow = (index) => {
        var business = [...this.state.business];
        business.splice(index, 1);
        this.setState({business});
    }

    render() {
        return (
            <div>
                <h3 align="center">Business List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Business</th>
                            <th>GST Number</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Index;
