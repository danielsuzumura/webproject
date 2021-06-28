<template>
    <div id="container-user">
        <div id="user-box">
            <h1>User information</h1>
            <table>
                <tr>
                    <td>Username: </td>
                    <td v-if="true">User</td>
                    <td v-else>
                        <input type="text" name="name" required v-model="name">
                        <p class="error" name="name">Invalid name</p>
                    </td>
                    <td><button>Change username</button></td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td v-if="true">user@email.com</td>
                    <td v-else>
                        <input type="email" name="email" required v-model="email">
                        <p class="error" name="email">{{errorMessage}}</p>
                    </td>
                    <td><button>Change email</button></td>
                </tr>
                <tr>
                    <td>Address: </td>
                    <td v-if="true">Address</td>
                    <td v-else>
                        <input type="text" name="address" required v-model="address">
                        <p class="error">Invalid address</p>
                    </td>
                    <td><button>Change address</button></td>
                </tr>
                <tr>
                    <td>Phone: </td>
                    <td v-if="true">123456789</td>
                    <td v-else>
                        <input type="tel" name="phone" required v-model="phone">
                        <p class="error">Invalid phone</p>
                    </td>
                    <td><button>Change phone</button></td>
                </tr>
            </table>
            <br>
            <h1>Change password</h1>
            <div id="change-password">
                <h2>Old password</h2>
                <input type="password" name="old-password" required v-model="old_password">
                <p class="error">Invalid password</p>

                <h2>New password</h2>
                <input type="password" name="new-password" required v-model="new_password">
                <p class="error">Invalid password</p>

                <h2>Confirm new password</h2>
                <input type="password" name="confirm-password" required v-model="confirm_password">
                <p class="error">Password doesn't match</p>
                <button>Change password</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    data () {
        return {
            name: '',
            email: '',
            old_password: '',
            new_password: '',
            confirm_password: '',
            address: '',
            phone: '',
            errorMessage: 'Email'
        };
    },
    methods: {
        verifyInput () {
            let error = false;
            if (this.new_password !== this.confirm_password) {
                errorTag[6].style.visibility = 'visible';
                error = true;
            } else {
                errorTag[6].style.visibility = 'hidden';
            }
            return error;
        }
    }
};
</script>

<style scoped>
    @import '../assets/style/user';
</style>
