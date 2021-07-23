<template>
    <div id="app">
      <Header></Header>
      <router-view :key="$route.path"></router-view>
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {loadDatabase} from '@/dataSet/DatabaseConnector';

export default {
    name: 'App',
    created: async function () {
        await loadDatabase();
    },
    components: {
        Header, Footer
    }
};
</script>

<style>

</style>
