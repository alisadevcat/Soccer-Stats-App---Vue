<template>
  <nav class="flex mb-2" aria-label="Breadcrumb" id="breadcrumb_nav">
    <ol
      class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb" class="after:content-['/'] after:mx-2 last:after:hidden">
        <a href="#" class="">{{ breadcrumb.name }}</a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array,
  },
};
</script>

<style scoped>

#breadcrumb_nav li a::after {
  content: " >";
}
#breadcrumb_nav li:not(:first-child) a::after {
  content: "";
}
</style>