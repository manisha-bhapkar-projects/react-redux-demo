import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../action';

function HooksShowData(props) {
    //same as mapStateToProps using Hooks
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h4>Number of cakes (using Hooks) {numOfCakes}</h4>
            <button onClick={()=> dispatch(buyCake())}>Click Me</button>
        </div>
    )
}




export default HooksShowData;