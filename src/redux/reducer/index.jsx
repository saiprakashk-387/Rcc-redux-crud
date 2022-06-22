
const defaultState = {
    users: [],
};
const rootReducer = (state = defaultState, action) => {
    switch (action.type) {

        case "GET_ALL_USERS":
            return defaultState.users;
        case "DELETE_USER":

            let allUsers = [...state];
// allUsers.pop()
            return allUsers.filter((user) => user.fname !== action.payload.fname);

        case "CREATE_USER":
            let newUsers = [...state];
            // newUsers.unshift(action.payload);
            newUsers.push(action.payload);
            return newUsers;
        case "UPDATE_USER":
            newUsers = [...state];
            newUsers[action.payLoad.index] = action.payLoad.obj;
            return newUsers;
        default:
            return defaultState.users;
        
    }
}
export default rootReducer;

///reducer can handle multiple request