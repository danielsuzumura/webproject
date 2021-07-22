/**
 * Shared functions between components using mixin
 */

export let ImportImage = {
    methods: {
        getImgUrl (photo) {
            try {
                return require('../assets/img/' + photo);
            } catch (err) {
                return require('../assets/img/no_img.png');
            }
        }
    }
};
export let calculateTotalCart = {
    computed: {
        total () {
            let total = 0;
            this.cart.forEach(item => {
                total += item.product.price * item.amount;
            });
            return total.toFixed(2);
        }
    }
};

export let calculateTotalProduct = {
    methods: {
        calculateTotal (price, amount) {
            return (price * amount).toFixed(2);
        }
    }
};
