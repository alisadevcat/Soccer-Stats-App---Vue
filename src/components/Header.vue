<template>
  <header class="fixed top-0 left-0 w-full z-80">
    <app-menu></app-menu>
  </header>
</template>

<script>

import AppMenu from "./Menu.vue";

export default {
  components: {
    AppMenu,
  },
};
</script>