<template>
  <div class="flex justify-start">
    <div class="mb-3 xl:w-96">
      <div
        class="input-group relative flex flex-wrap items-stretch w-full mb-4"
      >
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
            class="
              form-control
              relative
              flex-auto
              min-w-0
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            aria-label="Search"
            aria-describedby="button-addon2"
            placeholder="Search?"
          />
          <button
            type="submit"
            class="
              absolute
              top-0
              right-0
              p-2.5
              text-sm
              font-medium
              text-white
              bg-blue-700
              rounded-r-lg
              border border-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            <icon-search />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import IconSearch from "./icons/IconSearch.vue";

export default {
  props: {
    posts: Array,
    originalPosts: Array,
  },
  components: {
    IconSearch,
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
          result_posts: this.originalPosts,
        };
        console.log("clear input");
        this.$emit("handleInput", obj);
      }
      this.searchString = event.target.value;
    },
  },
};
</script>
