<template>
  <nav class="flex mb-2" aria-label="Breadcrumb" id="breadcrumb_nav">
    <ol
      class="inline-flex items-center space-x-1 md:space-x-3"
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb"
    >
      <li>
        <a href="#">{{ breadcrumb }}</a>
      </li>
    </ol>

  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array,
  },
  computed: {
    // breadCrumbs() {
    //   if (typeof this.$route.meta.breadCrumb === "function") {
    //     return this.$route.meta.breadCrumb.call(this, this.$route);
    //   }
    //   return this.$route.meta.breadCrumb;
    // },
  },
};
</script>

<style scoped>


/* ol li a::before {
  content: "→";
} */

#breadcrumb_nav li:not(:first-child)::before {
  content: "→";
}

/* #breadcrumb_nav li:first-child::before {
  content: "";
} */
</style>