import { createAction, createReducer } from "@reduxjs/toolkit";


const isFetching = createAction('is fetching');
const success = createAction('success');
const failure = createAction('failure');

const actions = {isFetching, success, failure};

const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const initialState = {
    status:  STATUS.NORMAL,
    fact: null
}

const reducer = createReducer(initialState, {
    [isFetching]: (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    }),  
    [success]: (state, action) => ({
        status: STATUS.SUCCESS,
        fact: action.payload
    }),
    [failure]: (state, action) => ({
        ...state,
        status: STATUS.FAILURE
    })

})

export { actions, reducer, STATUS};

/*
const initialState = [
    {
        product: {name: 'keps', price: 129},
        count: 1
    }
]

const reducer = createReducer(initialState, {
    [addToCart]: (state, action) => {
        let found = state.find(cartItem => cartItem.product.name === action.payload.name);
        if( found ) {
            const newState =state.map(cartItem => {
                if (cartItem.product.name === action.payload.name) {
                    return { ...cartItem, count: cartItem.count + 1 }
                } else {
                    return cartItem;
                }
            })  
            return newState;

        } else {
            return [
                ...state,
                {product: action.payload, count: 1}
            ];
        }

    }

})
*/





