<template>
  <form
    role="search"
    class="site-search site-nav__search"
    @submit.prevent="searchSubmit"
  >
    <input
      type="search"
      name="search"
      :value="searchString"
      @input="handleInput"
      class="site-search__input js-search-field"
      placeholder="Search?"
    />
    <button class="site-search__btn" type="submit">
      <span class="u-visually-hidden">
        <img src="../../src/assets/images/search.svg" />
      </span>
    </button>
  </form>
</template>

<script>
export default {
  props: {
    posts: Array,
    originalPosts: Array
  },
  data() {
    return {
      searchString: "",
      search_posts: [],
      no_result_text: "",
    };
  },
  methods: {
    searchSubmit() {
      let strLowCase = this.searchString.toLowerCase();
      let strUpperCase = this.searchString.toUpperCase();
      let strCamelCase = this.searchString.replace(
        this.searchString.charAt(0),
        this.searchString.charAt(0).toUpperCase()
      );
  
      let result_array = this.posts.map((item) => (item = Object.values(item)));

      let results = result_array.filter(
        (el) =>
          el.includes(strLowCase) ||
          el.includes(strUpperCase) ||
          el.includes(strCamelCase)
      );

      let search_results = results.map(
        (item) =>
          (item = {
            id: results[0][0],
            name: results[0][1],
            area: results[0][2],
          })
      );

      if (this.searchString) {
        this.search_posts = search_results;

        if (!results.length) {
          this.no_result_text = "No results found";
        }

      } else {
        this.search_posts = this.originalPosts;
        //console.log(this.originalPosts);
      }

      const obj = {
        result_posts: this.search_posts,
        no_results_text: this.no_result_text,
      };

      this.$emit("handleSubmit", obj);
    },
    handleInput(event) {
      if (!event.target.value) {

      const obj = {
        result_posts: this.originalPosts
      };
        
         this.$emit("handleInput", obj);
      }
      this.searchString = event.target.value;
    },
  },
};
</script>