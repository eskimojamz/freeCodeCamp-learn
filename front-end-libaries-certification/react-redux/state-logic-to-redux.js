// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD'
const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}
const messageReducer= (prevState=[], action) => {
    switch(action.type) {
        case(ADD):
            return [...prevState, action.message]
            break
        default:
            return prevState
    }
}
const store = Redux.createStore(messageReducer)
