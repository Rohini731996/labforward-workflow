import React from "react";
import { render } from "react-dom";

class CalculationTable extends React.Component {
    state = {
        rows: [{}]
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                        <h1> 2. Calculate Mean, Std. Deviation, Accuracy and Precision</h1>
                            <table
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-center"> # </th>
                                        <th className="text-center"> Test Volume </th>
                                        <th className="text-center"> Mean (µl) </th>
                                        <th className="text-center"> Std. Deviation (µl) </th>
                                        <th className="text-center"> Accuracy (%) </th>
                                        <th className="text-center"> Precision (%) </th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.rows.map((item, idx) => (
                                        <tr id="addr0" key={idx}>
                                            <td>{idx}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="percentage"
                                                    value={'100%'}
                                                    className="form-control"
                                                    style={{textAlign:'center'}}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="mean"
                                                    value={this.state.rows[idx].name}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="deviation"
                                                    value={this.state.rows[idx].mobile}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="accuracy"
                                                    value={this.state.rows[idx].mobile}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="precision"
                                                    value={this.state.rows[idx].mobile}
                                                    onChange={this.handleChange(idx)}
                                                    className="form-control"
                                                />
                                            </td>
                                           
                                            <td>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={this.handleRemoveSpecificRow(idx)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={this.handleAddRow} className="btn btn-primary">
                                Add Row
                            </button>
                            <button
                                onClick={this.handleRemoveRow}
                                className="btn btn-danger float-right"
                            >
                                Delete Last Row
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalculationTable;

