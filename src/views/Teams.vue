<template>
  <div class="container">
    <h1>Команды</h1>
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


    <div class="team-cards">
      <div class="card" v-for="team in displayedPosts" :key="team.id">
        <router-link :to="{ name: 'team-calendar', params: { id: team.id } }">
          <div class="card-content">
            <p class="card-title">{{ team.name }}</p>
            <figure class="card-image">
              <img
                :src="team.crestUrl"
                alt="{{team.name}}"
                width="96"
                height="96"
              />
            </figure>
          </div>
        </router-link>
      </div>
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
          v-for="pageNumber in pages.slice(page - 1, page + 8)"
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
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
// const apiKey = process.env.DOTENV.API_KEY;
import AppSearch from "../components/Search.vue";

import axios from "axios";

export default {
  components: {
    AppSearch,
  },
  data() {
    return {
      teams: [],
      page: 1,
      perPage: 8,
      pages: [],
      searchString: "",
      originalteams: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.teams.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(teams) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return teams.slice(from, to);
    },
    onFormSubmit() {
      let strLowCase = this.searchString.toLowerCase();
      let strUpperCase = this.searchString.toUpperCase();
      let strCamelCase = this.searchString.replace(
        this.searchString.charAt(0),
        this.searchString.charAt(0).toUpperCase()
      );

      let result_array = this.teams.map((item) => (item = Object.values(item)));
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
        this.teams = result1;

        if ((result.length = 0)) {
          this.$refs.not_found.innerText = "No results found";
        }
      } else {
        this.teams = this.originalteams;
      }
    },
  },
  computed: {
    key() {
      return apiKey;
    },
    displayedPosts() {
      return this.paginate(this.teams);
    },
    validateSearchString(searchedString) {
      return searchedString.toLowerCase();
    },
  },
  watch: {
    teams() {
      this.setPages();
    },
  },
  created() {
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/teams",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    }).then((response) => {
      this.teams = response.data.teams;
      this.originalteams = response.data.teams;
    });
  },
};
</script>


<style>
.card-image {
  padding-top: 1rem;
}
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
