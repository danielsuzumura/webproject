<template>
    <div id="container">
        <div id="register-box">
            <form @submit.prevent.stop="sendForm" method="POST">
                <h1>REGISTER</h1>
                <h2>Name</h2>
                <div class="input-container">
                    <input type="text" name="name" required autofocus v-model="name">
                    <p class="error" name="name">Invalid name</p>
                </div>
                <h2>Email</h2>
                <div class="input-container">
                    <input type="email" name="email" required v-model="email">
                    <p class="error" name="email">{{errorMessage}}</p>
                </div>
                <h2>Password</h2>
                <div class="input-container">
                    <input type="password" name="password" required v-model="password">
                    <p class="error">Invalid password</p>
                </div>
                <h2>Confirm password</h2>
                <div class="input-container">
                    <input type="password" name="confirm-password" required v-model="confirm_password">
                    <p class="error">Password doesn't match</p>
                </div>
                <h2>Address</h2>
                <div class="input-container">
                    <input type="text" name="address" required v-model="address">
                    <p class="error">Invalid address</p>
                </div>
                <h2>Phone</h2>
                <div class="input-container">
                    <input type="tel" name="phone" required v-model="phone">
                    <p class="error">Invalid phone</p>
                </div>
                <input type="submit" name="submitForm" value="Register">
            </form>
        </div>
    </div>
</template>

<script>
import {Person} from '../dataSet/Person';
import * as DB from '../dataSet/DatabaseConnector';
let errorTag = document.getElementsByClassName('error');
export default {
    name: 'Register',
    data () {
        return {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            address: '',
            phone: '',
            errorMessage: 'Email'
        };
    },
    methods: {
        verifyInput () {
            let error = false;
            if (this.password !== this.confirm_password) {
                errorTag[3].style.visibility = 'visible';
                error = true;
            } else {
                errorTag[3].style.visibility = 'hidden';
            }
            return error;
        },
        async sendForm () {
            if (!this.verifyInput()) {
                let user = new Person(this.name, this.email, this.password, this.confirm_password, this.address, this.phone);
                try {
                    await DB.insertUser(user);
                    await DB.loginUser(this.email, this.password);
                    this.$root.$emit('login', this.email);
                    this.$router.push('/');
                } catch (err) {
                    this.errorMessage = err.message;
                    errorTag[1].style.visibility = 'visible';
                }
            }
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/register';
</style>
