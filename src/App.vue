<template>
  <div class="wrapper" id="app">
    <app-header></app-header>
    <main class="page-main">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">

 @import "./assets/sass/app.scss";

</style>
