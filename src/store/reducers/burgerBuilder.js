import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDINETS, FETCH_INGREDINETS_FAILED } from '../actions/actionTypes'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}
const INGREDIENT_PRICES = {
    salad: 1,
    bacon: 2,
    cheese: 3,
    meat: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case SET_INGREDINETS:
            return {
                ...state,
                ingredients: action.ingredients,
                error:false
            }
        case FETCH_INGREDINETS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};

export default reducer;