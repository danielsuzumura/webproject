<template>
    <div id="container-contact">
        <div id="form-block">
            <form class="contact-form">
                <h1>Contact Us</h1> <br>
                <label id="form-name"> Your Name: </label><br>
                <input type="text" name="user-name"><br><br>
                <label id="form-email"> Your Email: </label><br>
                <input type="email" name="user-email"><br><br>
                <label id="form-text"> Your Message: </label><br>
                <!--<input type="submit" name="btn-submit" value="Submit">-->
                <textarea id="subject" name="subject" placeholder="Your kind words here"></textarea><br>
                <input type="submit" name="btn-submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
};
</script>

<style>
    @import '../assets/style/contact';
</style>
