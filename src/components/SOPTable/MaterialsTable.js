import React from "react";
import { connect } from "react-redux";
import {
    appendMaterialData,
    appendCalibrationData,
    appendCalculationData
} from '../../redux/actions/tableAction'

class MaterialsTable extends React.Component {
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
            value: ""
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

    saveData = () => {
        this.props.appendMaterialData({ name: "material-used", data: this.state.rows })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <h1>3. Material used:</h1>
                            <table
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-center"> # </th>
                                        <th className="text-center"> Name </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.rows.map((item, idx) => (
                                        <tr id="addr0" key={idx}>
                                            <td>{idx}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={this.state.rows[idx].name}
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
                            <button onClick={this.saveData} className="btn btn-primary">
                            Save Data
                            </button>
                            {/* <button
                                onClick={this.handleRemoveRow}
                                className="btn btn-danger float-right"
                            >
                                Delete Last Row
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    appendCalibrationData,
    appendCalculationData,
    appendMaterialData
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialsTable);