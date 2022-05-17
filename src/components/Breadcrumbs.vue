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
};
</script>

<style scoped>

   /* li:not(:last-child) a:after {
            content: ' || '!important;
            color:green;
            font-weight:bold;
        }

        li {
            display: block;
        } */

#breadcrumb_nav li a::after {
  content: " / ";
}

</style>