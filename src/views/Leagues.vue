<template>
  <div class="container">
    <h1>Лиги</h1>
    <!-- <app-search /> -->

    <form
      role="search"
      class="site-search site-nav__search"
      @submit.prevent="onFormSubmit"
    >
      <input
        type="search"
        name="search"
        v-model="searchString"
        class="site-search__input js-search-field"
        placeholder="Search?"
      />
      <button class="site-search__btn" type="submit">
        <span class="u-visually-hidden">
          <img src="../../src/assets/images/search.svg" />
        </span>
      </button>
    </form>

    <div class="league-cards">
      <div class="card" v-for="item in displayedPosts" :key="item.id">
        <router-link :to="{ name: 'league-calendar', params: { id: item.id } }">
          <div class="card-content">
            <p class="card-title">League: {{ item.name }}</p>
            <p class="card-subtitle">Country: {{ item.area }}</p>
          </div>
        </router-link>
      </div>

      <p ref="not_found"></p>
    </div>

    <div class="pagination row">
      <ul class="pagination-list">
        <span class="pagination-button">
          <button type="button" v-if="page != 1" @click="page--">
            Previous
          </button>
        </span>
        <button
          type="button"
          v-for="pageNumber in pages.slice(page - 1, page + 9)"
          :key="pageNumber"
          @click="page = pageNumber"
        >
          {{ pageNumber }}
        </button>

        <span class="pagination-button">
          <button type="button" @click="page++" v-if="page < pages.length">
            Next
          </button>
        </span>
      </ul>
    </div>
    <!-- <app-pagination :page="page" :pages="pages"/> -->
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
const apiKey = process.env.VUE_APP_API_KEY;
import AppSearch from "../components/Search.vue";
import axios from "axios";
import AppPagination from "../components/Pagination.vue";

export default {
  components: {
    AppSearch,
    AppPagination,
  },
  data() {
    return {
      posts: [],
      page: 1,
      perPage: 9,
      pages: [],
      searchString: "",
      originalposts: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    onFormSubmit() {
      let strLowCase = this.searchString.toLowerCase();
      let strUpperCase = this.searchString.toUpperCase();
      let strCamelCase = this.searchString.replace(
        this.searchString.charAt(0),
        this.searchString.charAt(0).toUpperCase()
      );

      let result_array = this.posts.map((item) => (item = Object.values(item)));
      let result = result_array.filter(
        (el) =>
          el.includes(strLowCase) ||
          el.includes(strUpperCase) ||
          el.includes(strCamelCase)
      );

      let result1 = result.map(
        (item) =>
          (item = { id: result[0][0], name: result[0][1], area: result[0][2] })
      );

      if (this.searchString) {
        this.posts = result1;

        if ((result.length = 0)) {
          this.$refs.not_found.innerText = "No results found";
        }
      } else {
        this.posts = this.originalposts;
      }

      //this.posts.map(item => item = { id: result[0], name: result[1], area: result[2]} );
      console.log(result_array);
      console.log(result[0]);
      console.log(result1);
    },
  },
  computed: {
    key() {
      return apiKey;
    },
    displayedPosts() {
      return this.paginate(this.posts);
    },
    validateSearchString(searchedString) {
      return searchedString.toLowerCase();
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/competitions",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    }).then((response) => {
      let competitions = response.data.competitions.map(
        (item) =>
          (item = { id: item.id, name: item.name, area: item.area.name })
      );
      this.posts = competitions;
      this.originalposts = competitions;
    });
  },
};
</script>


<style>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
  padding: 3px;
}
.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
