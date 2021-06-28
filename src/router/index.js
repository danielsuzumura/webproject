import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Cart from '@/components/Cart';
import Login from '@/components/Login';
import Register from '@/components/Register';
import ProductDisplay from '@/components/ProductDisplay';
import ListItems from '@/components/ListItems';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import ProductForm from '@/components/ProductForm';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/Cart', component: Cart },
        { path: '/Login', component: Login },
        { path: '/Register', component: Register },
        { path: '/ProductDisplay', component: ProductDisplay },
        { path: '/ListItems', component: ListItems },
        { path: '/AboutUs', component: AboutUs },
        { path: '/Contact', component: Contact },
        { path: '/ProductForm', component: ProductForm }
    ]
});
