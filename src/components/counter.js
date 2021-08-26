import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, plus, minus, reset}) => {

    return (
        <div>
            <div className="counter-block">
                <div className="counter">
                    {counter}
                </div>
            </div>
            <div>
                <button onClick={plus} className="plus-btn btn btn-success">
                    <i className="material-icons icon-plus">add</i>
                </button>
                <button onClick={minus} className="minus-btn btn btn-warning">
                    <i className="material-icons icon-minus">remove</i>
                </button>
                <button onClick={reset} className="reset-btn btn btn-danger">
                    <i className="material-icons icon-minus">autorenew</i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);