<template>
  <div class="breadcrumbs">
      <ul class="breadcrumbs__list">
        <li>{{ main }} > </li>
        <li>{{ breadcrumb }}</li>
      </ul>
  </div>
</template>

<script>

export default {
  props:{
    main: String,
    breadcrumb: String
  }
}
</script>