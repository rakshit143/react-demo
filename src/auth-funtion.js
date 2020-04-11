export const userService = {
    login,
    logout
};

function login(username, password) {
    if (username !== null && password !== null && username === 'Rakshit' && password === '12345') {
        let user = {'username':username, 'password':password}
        localStorage.setItem('user', JSON.stringify(user));
        return {'user': user, 'error': null};
    } else {
        return {'user': null, 'error': 'user not found'};
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}