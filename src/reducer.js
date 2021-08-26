const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            if (state > 0){
                return state - 1;
            }
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}

export default reducer;