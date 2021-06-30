# webproject

> A Vue.js project

# Single-page Application 
The project consists in a single-page application (SPA), rewriting the current page dynamically according to the user interactions.<br>

# Issue
* When return to home from product-display, stylesheet doesn't match home
  * Fix: add scoped to <style> tag -> <style scoped>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
