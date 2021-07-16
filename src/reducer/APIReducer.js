import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_DATA } from '../action/type';

const initialState = {
    loading: false,
    users: [],
    error: '',
    userData: undefined
}

const APIreducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USER_FAILURE:
            return {
                loading : false,
                users: [],
                error: action.payload
            }

            case FETCH_USER_DATA:
            return {
                ...state,
                loading : false,
                userData: action.payload,
                error: ''
            }

            default: return state
    }
}
export default APIreducer;