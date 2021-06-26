<template>
    <div id="container">
            <div id="login-box">
                <form method="POST" @submit.prevent.stop="sendForm">
                    <h1>LOGIN</h1>
                    <h2>Email</h2>
                    <input type="email" name="email" required autofocus v-model="email">
                    <br><br>
                    <h2>Password</h2>
                    <input type="password" name="password" required v-model="password">
                    <br><br>
                    <input type="submit" name="submitForm" value="Login">
                </form>
            </div>
        </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';

export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async sendForm () {
            try {
                // request login to database
                await DB.loginUser(this.email, this.password);
                // go to home page
                this.$router.push('/');
            } catch (err) {
                console.log(err.message);
            }
        }
    }
};
</script>

<style>
    @import '../assets/style/login';
</style>
