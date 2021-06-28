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
                    <p class="error">{{errorMessage}}</p>
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
            password: '',
            errorMessage: 'Erro'
        };
    },
    methods: {
        async sendForm () {
            try {
                // request login to database
                let user = await DB.loginUser(this.email, this.password);
                if (user instanceof Error) {
                    throw Error(user.message);
                }
                this.$root.$emit('login');
                // go to home page
                this.$router.push('/');
            } catch (err) {
                this.errorMessage = err.message;
                document.getElementsByClassName('error')[0].style.visibility = 'visible';
            }
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/login';
</style>
