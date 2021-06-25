<template>
    <div id="container">
            <div id="login-box">
                <form method="POST">
                    <h1>LOGIN</h1>
                    <h2>Email</h2>
                    <input type="email" name="email" required autofocus>
                    <br><br>
                    <h2>Password</h2>
                    <input type="password" name="password" required>
                    <br><br>
                    <a href="index-logged.html"><input type="button" name="submit" value="Login"></a>
                </form>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Login'
};
</script>

<style>
    @import '../assets/style/login';
</style>
