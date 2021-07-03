<template>
    <div id="container">
        <div id="register-box" v-if="isAdmin === true">
            <form @submit.prevent.stop="sendForm" method="POST">
                <h1>USER REGISTER</h1>
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
            <p id="changes-saved" v-show="sucessMessage === true">User created</p>
        </div>
        <div class="container-admin denied" v-else>
            <h1>Acess denied</h1>
        </div>
    </div>
</template>

<script>
import {Person} from '../dataSet/Person';
import * as DB from '../dataSet/DatabaseConnector';
let errorTag = document.getElementsByClassName('error');
export default {
    name: 'UserForm',
    mounted: async function () {
        if (await DB.isAdmin()) {
            this.isAdmin = true;
        }
    },
    data () {
        return {
            isAdmin: false,
            name: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            errorMessage: 'Email',
            sucessMessage: false
        };
    },
    methods: {
        async sendForm () {
            let user = new Person(this.name, this.email, this.password, this.address, this.phone);
            try {
                await DB.insertUser(user);
                this.sucessMessage = true;
            } catch (err) {
                this.errorMessage = err.message;
                errorTag[1].style.visibility = 'visible';
            }
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/register';
    #changes-saved{
        margin-top: 5%;
        color:green;
        font-size: x-large;
        text-align: center;
    }
    .denied {
        line-height: 100vh;
        margin: 0 auto;
        text-align: center;
        color:red;
    }
</style>
