import React from 'react';
import { connect } from 'react-redux';
import { buyIcecream } from '../action/index';


function IceCreamCounter(props) {
    return (
        <div>
            <h4>Number of IceCream {props.numOfIcecreams}</h4>
            <button onClick={props.buyIcecream}>Click Me</button>
        </div>
    )
}

//to get all state
const mapStateToProps = state => {
    return {
        numOfIcecreams: state.iceCream.numOfIcecreams
    }
}

//to dispatch the action call action creator
const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamCounter);
// export default IceCreamCounter;
