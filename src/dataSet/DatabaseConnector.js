export async function insertUser (user) {
    try {
        if (window.localStorage.getItem(user.email) === null) {
            window.localStorage.setItem(user.email, JSON.stringify(user));
        } else {
            throw Error('Email is already in use');
        }
    } catch (error) {
        throw Error(error.message);
    }
}
export async function loginUser (email, password) {
    let user;
    try {
        user = JSON.parse(window.localStorage.getItem(email));
        if (user === null) {
            throw Error('User doesn\'t exist');
        }
        // Make user instanceof Person class ?
        if (password === user._password) {
            return user;
        } else {
            throw Error('Invalid email or password');
        }
    } catch (error) {
        throw Error(error.message);
    }
}
