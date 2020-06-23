import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement, stepChanged } from './../actions/counterAction';

const Counter = props => (
    <div>
        <h1>Contador: { props.counter.number }</h1>
        <p> Incrementar em 
            <input 
                onChange={ props.stepChanged } 
                value={ props.counter.step } 
                type="number"
            />
        </p>
        <br />
        <button onClick={ props.increment }> Incrementar </button>
        <button onClick={ props.decrement }> Decrementar </button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement, stepChanged}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)