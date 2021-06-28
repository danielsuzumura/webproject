export class Person {
    constructor (name, email, password, address, phone) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._address = address;
        this._phone = phone;
    }
    get name () {
        return this._name;
    }
    get email () {
        return this._email;
    }
    get password () {
        return this._password;
    }
    get address () {
        return this._address;
    }
    get phone () {
        return this._phone;
    }
}
