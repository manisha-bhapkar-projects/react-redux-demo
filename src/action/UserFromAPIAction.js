// import { FETCH_USER_REQUEST } from './type';
// import { FETCH_USER_SUCCESS } from './type';
// import { FETCH_USER_FAILURE } from './type';
import axios from 'axios';
import{
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_DATA
} from './type';



export const fetchUserRequest = () =>{
    return{
        type: FETCH_USER_REQUEST
    }
}

 
export const fetchUserSuccess = users =>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

 
export const fetchUserFailure = error =>{
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUserData = userdata =>{
    return{
        type: FETCH_USER_DATA,
        payload: userdata
    }
}

export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data
            console.log(users);
            dispatch(fetchUserSuccess(users))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
        
    }
}


export const fetchUserDetail = () =>{
    return () =>{
        return axios.get('https://jsonplaceholder.typicode.com/users/1')
    
        // .then(response =>{
        //     const userData = response.data
        //     console.log("userdata", userData);
        //     dispatch(fetchUserData(userData))

        // })
        // .catch(error =>{
        //     const errorMsg = error.message
        // })
        

    }
}