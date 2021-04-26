// This is what the data layer initially looks like
export const initialState = {
    //We will start off with the user who isn't logged in
    user: null,
};

// When we have the data there, you can dispatch actions into the data
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        // If you just received an action, we want to return what the new data layer will look like
        case actionTypes.SET_USER:
            return {
                // return what the new data layer will look like
                // return whatever it currently looks like but change 
                // the user to whatever we passed in as a user payload
                ...state,
                user: action.user,
            };
            default:
                return state;
    }
};

export default reducer;