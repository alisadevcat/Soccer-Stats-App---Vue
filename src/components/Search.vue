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
            class="
              btn
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
              flex
              items-center
            "
            type="submit"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
    originalPosts: Array,
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
        console.log('clear input')
        this.$emit("handleInput", obj);
      }
      this.searchString = event.target.value;
    },
  },
};
</script>
