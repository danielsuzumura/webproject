<template>
    <div id="rating">
        <i class="rating-star-it fa fa-star-o" @click=fillStart(1)></i>
        <i class="rating-star-it fa fa-star-o" @click=fillStart(2)></i>
        <i class="rating-star-it fa fa-star-o" @click=fillStart(3)></i>
        <i class="rating-star-it fa fa-star-o" @click=fillStart(4)></i>
        <i class="rating-star-it fa fa-star-o" @click=fillStart(5)></i>
    </div>
</template>

<script>
export default {
    name: 'RatingInteractive',
    props: ['ratingValue'],
    methods: {
        fillStart (rating) {
            let stars = document.querySelectorAll('.rating-star-it');
            for (let i = 0; i < rating; ++i) {
                stars[i].classList.remove('fa-star-o');
                stars[i].classList.add('fa-star');
            }
            for (let i = rating; i < 5; ++i) {
                stars[i].classList.remove('fa-star');
                stars[i].classList.add('fa-star-o');
            }
            this.$root.$emit('click', rating);
        }
    }
};
</script>

<style>
    .rating-star-it{
        color: yellow;
        font-size: 24px;
    }
    #rating{
        display: inline-flex;
    }
</style>
