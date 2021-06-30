/**
 * Shared functions between components using mixin
 */

export let ImportImage = {
    methods: {
        getImgUrl (photo) {
            return require('../assets/img/' + photo);
        }
    }
};
export let calculateTotalCart = {
    computed: {
        total () {
            let total = 0;
            this.cart.forEach(item => {
                total += item.product._price.replace(',', '.') * item.amount;
            });
            return total.toFixed(2);
        }
    }
};
