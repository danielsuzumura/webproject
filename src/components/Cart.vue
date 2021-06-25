<template>
    <div id="container">
        <div id="cart-box">
            <table>
                <caption>CART</caption>
                <colgroup>
                    <col class="item">
                    <col class="amount">
                    <col class="total">
                </colgroup>
                <thead>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Apple</td>
                        <td>3</td>
                        <td>59.97</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">Total: 59.97</td>
                    </tr>
                </tfoot>
            </table>
            <br><br>
            <button>Finish purchase</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style>
    /* @import '../assets/style/cart'; */
</style>
