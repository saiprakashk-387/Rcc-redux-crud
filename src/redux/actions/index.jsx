export function getALLStudentsAction() {
    return {
        type: "GET_ALL_STUDENTS"
    }
}

export function getALLProductsAction() {
    return {
        type: "GET_ALL_PRODUCTS"
    }
}

export function getALLItems() {
    return {
        type: "GET_ALL_"
    }
}
export function addUser(form) {
    return {
        type: "ADD",
        payload: form
    }
}
export function deleteUser() {
    return {
        type: "DELETE"
    }
}
/////
export function getAllUsersAction() {
    return {
        type: "GET_ALL_USERS"
    }
}

export function deleteUserAction(user) {
    return {
        type: "DELETE_USER",
        payload: user
    }
}

export function createUserAction(user) {
    return {
        type: "CREATE_USER",
        payload: user
    }
}

export function updateUserAction(user) {
    return {
        type: "UPDATE_USER",
        payload: user
    }
}
///action wil return object