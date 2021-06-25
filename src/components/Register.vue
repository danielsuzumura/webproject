<template>
    <div id="container">
        <div id="register-box">
            <form method="POST">
                <h1>REGISTER</h1>
                <h2>Name</h2>
                <input type="text" name="name" required autofocus>
                <br><br>
                <h2>Email</h2>
                <input type="email" name="email" required>
                <br><br>
                <h2>Password</h2>
                <input type="password" name="password" required>
                <br><br>
                <h2>Confirm password</h2>
                <input type="password" name="confirm-password" required>
                <br><br>
                <h2>Address</h2>
                <input type="text" name="address" required>
                <br><br>
                <h2>Phone</h2>
                <input type="tel" name="phone" required>
                <br><br>
                <a href="index-logged.html"><input type="button" name="submit" value="Register"></a>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style>
    @import '../assets/style/register';
</style>
