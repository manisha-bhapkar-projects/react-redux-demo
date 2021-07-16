import React from 'react';
import { connect } from 'react-redux';
import { buyCake, addCake } from '../action/index';


function ShowData(props) {
    return (
        <div>
            <h4>Number of cakes {props.numOfCakes}</h4>
            <button onClick={props.buyCake}>Click Me(buyCake)</button>
            <button onClick={props.addCake}>Click Me(addCake)</button>
        </div>
    )
}

//to get all state
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

//to dispatch the action call action creator
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowData);