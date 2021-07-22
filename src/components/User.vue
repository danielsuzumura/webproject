<template>
    <div id="container-user">
        <div id="user-box" v-if="user !== null">
            <div id="user-sidebar">
                <a class="page-select active">User information</a>
                <router-link class="page-select" to="/History">Purchase history</router-link>
                <a class="page-select" @click="logout">Logout</a>
            </div>
            <div id="user-modification">
                <h1>User information</h1>
                <table>
                    <tr>
                        <td>Username: </td>
                        <td>
                            <input type="text" name="name" required v-model="user.name">
                            <p class="error" name="name"  v-if="invalidInput">Invalid name</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>
                            <input type="email" id="email" required v-model="user.email">
                            <p id="errorEmail" v-if="invalidInputEmail">{{errorMessageEmail}}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>
                            <input type="text" name="address" required v-model="user.address">
                            <p class="error" v-if="invalidInput">Invalid address</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone: </td>
                        <td>
                            <input type="tel" name="phone" required v-model="user.phone">
                            <p class="error" v-if="invalidInput">Invalid phone</p>
                        </td>
                    </tr>
                </table>
                <button @click=verifyInputData>Save changes</button>
                <p id="changes-saved" v-show="sucessMessageData === true">Changes saved</p>
                <br>
                <h1>Change password</h1>
                <div id="change-password">
                    <h2>Old password</h2>
                    <input type="password" name="old-password" required v-model="old_password">
                    <p class="error" id="password-Invalid">Wrong password</p>
                    <h2>New password</h2>
                    <input type="password" name="new-password" required v-model="new_password">
                    <p class="error" id="password-Identical">Same password</p>
                    <h2>Confirm new password</h2>
                    <input type="password" name="confirm-password" required v-model="confirm_password">
                    <p class="error" id="password-Error">Password doesn't match</p>
                    <button @click=verifyInputPassword>Change password</button>
                    <p id="changes-saved" v-show="sucessMessagePassword === true">Password updated</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
export default {
    name: 'User',
    mounted: async function () {
        try {
            await this.getUser();
        } catch (err) {
            this.$router.push('/Login');
        }
    },
    data () {
        return {
            user: null,
            old_email: '',
            old_password: '',
            new_password: '',
            confirm_password: '',
            invalidInputEmail: false,
            invalidInput: false,
            errorMessageEmail: '',
            sucessMessageData: false,
            sucessMessagePassword: false
        };
    },
    methods: {
        checkEmail () {
            let inputEmail = document.getElementById('email');
            if (!inputEmail.checkValidity()) {
                this.invalidInputEmail = true;
                this.errorMessageEmail = 'Invalid email';
                return false;
            } else {
                this.invalidInputEmail = false;
                return true;
            }
        },
        async verifyInputData () {
            if (this.checkEmail()) {
                try {
                    await DB.updateUser(this.user, this.old_email);
                    this.sucessMessageData = true;
                    this.invalidInputEmail = false;
                } catch (err) {
                    this.errorMessageEmail = err.message;
                    this.invalidInputEmail = true;
                }
            }
        },
        async verifyInputPassword () {
            let error = false;
            let passwordInvalid = document.getElementById('password-Invalid');
            let passwordIdentical = document.getElementById('password-Identical');
            let passwordError = document.getElementById('password-Error');
            if (this.old_password !== this.user.password) {
                error = true;
                passwordInvalid.style.visibility = 'visible';
            } else {
                passwordInvalid.style.visibility = 'hidden';
                if (this.new_password === this.user.password) {
                    error = true;
                    passwordIdentical.style.visibility = 'visible';
                } else {
                    passwordIdentical.style.visibility = 'hidden';
                }
            }
            if (this.new_password !== this.confirm_password) {
                error = true;
                passwordError.style.visibility = 'visible';
            } else {
                passwordError.style.visibility = 'hidden';
            }
            if (error === false) {
                this.user.password = this.new_password;
                try {
                    DB.updateUser(this.user, this.old_email);
                    this.sucessMessagePassword = true;
                } catch (err) {

                }
            }
        },
        async getUser () {
            this.user = await DB.getSession();
            this.old_email = this.user.email;
        },
        async logout () {
            await DB.logout();
            this.$root.$emit('login');
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/user';
</style>
