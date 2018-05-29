//reducer takes in two things: 

//1. the action
//2. a copy of current state

//every reducer runs when an action is dispatched
function comments (state = [], action) {
    console.log(state, action);
    return state;
}

export default comments;