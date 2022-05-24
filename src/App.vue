<template>
  <div class="wrapper" id="app">
    <app-header></app-header>
    <main class="pt-30 flex-auto">
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

