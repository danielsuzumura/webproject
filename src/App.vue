<template>
    <div id="app">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
console.log(Home.data());
export default {
    name: 'App',
    data () {
        return {
            currentPage: 'Home'
        };
    },
    components: {
        Header, Footer
    }
};
</script>

<style>

</style>
