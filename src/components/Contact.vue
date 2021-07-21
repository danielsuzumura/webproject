<style scoped>
    @import '../assets/style/contact';
</style>

<template>
    <div id="container-contact">
        <div id="form-block">
            <form class="contact-form" @submit.prevent.stop="submitForm">
                <h1>Contact Us</h1> <br>
                <label id="form-name"> Your Name: </label><br>
                <input type="text" name="user-name" v-model="name" required><br><br>
                <label id="form-email"> Your Email: </label><br>
                <input type="email" name="user-email" v-model="email" required><br><br>
                <label for="form-text"> Your Message: </label><br>
                <!--<input type="submit" name="btn-submit" value="Submit">-->
                <textarea id="form-text" name="form-text" placeholder="Your kind words here" v-model="message" required></textarea><br>
                <input type="submit" name="btn-submit" value="Submit">
            </form>
            <p v-if="successMessage === true">Thanks for the contact</p>
        </div>
    </div>
</template>

<script>
import * as DB from '../dataSet/DatabaseConnector';
export default {
    name: 'Contact',
    data () {
        return {
            name: '',
            email: '',
            message: '',
            successMessage: false
        };
    },
    methods: {
        submitForm () {
            DB.insertContactUs(this.name, this.email, this.message);
            this.successMessage = true;
        }
    }
};
</script>
