<template>
    <div id="container-payment">
        <div id="payment-box">
            <form @submit.prevent.stop="sendForm" method="POST">
                <h1>PAYMENT</h1>
                <div class="field-line">
                    <div id="card-container" class="input-container">
                        <h2>Credit Card</h2>
                        <input type="text" name="credit-card" required autofocus v-model="credit_card">
                        <p class="error" name="credit-card">Invalid credit card number</p>
                    </div>
                    <div id="security-container" class="input-container">
                        <h2>Security Code</h2>
                        <input type="number" name="security-code" required v-model="security_code">
                        <p class="error" name="security-code">Invalid security code</p>
                    </div>
                </div>
                <div class="field-line">
                    <div class="input-container">
                        <h2>Name on Card</h2>
                        <input type="text" name="name" required v-model="name">
                        <p class="error">Invalid name</p>
                    </div>
                </div>
                <div class="field-line">
                    <div class="input-container">
                        <h2>Expiration Date</h2>
                        <input type="month" name="expiration-date" required pattern="[0-9]{2}/[0-9]{2}" v-model="expiration_date">
                        <p class="error">Invalid date</p>
                    </div>
                    <div class="input-container">
                        <h2>ZIP Code</h2>
                        <input type="text" name="address" required v-model="zip_code">
                        <p class="error">Invalid ZIP code</p>
                    </div>
                </div>
                <input type="submit" name="submitForm" value="Pay">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Payment'
};
</script>

<style scoped>
    @import '../assets/style/payment';
</style>
