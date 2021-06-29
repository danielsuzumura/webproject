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
