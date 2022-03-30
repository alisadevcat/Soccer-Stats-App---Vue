
   
<template>
  <div class="container">
    <h1>Лиги</h1>
    <app-search
      :posts="posts"
      :originalPosts="originalposts"
      @handle-submit="handleSubmit"
      @handle-input="handleInput"
    />

    <!-- <form
      role="search"
      class="site-search site-nav__search"
      @submit.prevent="onFormSubmit"
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
    </form> -->

    <div class="league-cards">
      <div class="card" v-for="item in displayedPosts" :key="item.id">
        <router-link :to="{ name: 'league-calendar', params: { id: item.id } }">
          <div class="card-content">
            <p class="card-title">League: {{ item.name }}</p>
            <p class="card-subtitle">Country: {{ item.area }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="text-center">
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
    handleSubmit(obj) {
      this.posts = obj.result_posts;
      if (obj.no_results_text) {
        this.$refs.not_found.innerText = obj.no_results_text;
      }
    },
    handleInput(obj) {
     this.posts = obj.result_posts;
    },
  },
  computed: {
    key() {
      return apiKey;
    },
    displayedPosts() {
      return this.paginate(this.posts);
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