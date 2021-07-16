import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from '../action/index';


function UsingMapStateToProps(props) {
    return (
        <div>
            <h4>Item  {props.item}</h4>
            <button onClick={props.onItemDispatch}>Item from Dispatch</button>
        </div>
    )
}

//to get all state
const mapStateToProps = (state, ownProps) => {
        const itemState = ownProps.cake ?
        state.cake.numOfCakes : state.iceCream.numOfIcecreams
        return{
            item: itemState
        }
}

//to dispatch the action call action creator
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ownProps", ownProps);
    const dispatchFunction = ownProps.cake ?
    () => dispatch(buyCake()) :
    () => dispatch(buyIcecream())
    return {
        onItemDispatch: dispatchFunction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsingMapStateToProps);