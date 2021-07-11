const loggedReducer = (state = false, action) => {
    switch(action.type){
        case("LOG_IN"):
            return !state
        case("LOG_OUT"):
            return state = false
        default:
            return state
    }
}

export default loggedReducer