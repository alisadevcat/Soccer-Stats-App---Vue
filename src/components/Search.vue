<template>
  <form
    method="get"
    role="search"
    action="{{ site.url }}"
    class="site-search site-nav__search"
  >
    <input
      type="search"
      name="s"
      value=""
      class="site-search__input js-search-field"
      placeholder="Search?"
    />
    <button class="site-search__btn">
      <span class="u-visually-hidden">
          <img src="../../src/assets/images/search.svg">
      </span>
    </button>
  </form>
</template>

<script>
export default {};
</script>