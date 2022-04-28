<template>
  <div class="container mx-auto max-w-screen-xl px-3 box-border">
    <h1>Команды</h1>

    <app-search
      :posts="teams"
      :originalPosts="originalteams"
      @handle-submit="handleSubmit"
      @handle-input="handleInput"
    />

    <div class="grid grid-cols-13 gap-2 place-content-center">
      <div class="border rounded-sm border-black border-solid py-12 " v-for="team in displayedPosts" :key="team.id">
        <router-link :to="{ name: 'team-calendar', params: { id: team.id , team_name: team.name } }">
          <div>
            <p class="pb-4">{{ team.name }}</p>
              <img v-if="team.crestUrl"
                :src="team.crestUrl"
                :alt="team.name"
                width="96"
                height="96"
                class="block mx-auto">
          </div>
        </router-link>
      </div>
    </div>
<div class="py-4">
    <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="onPageClick($event)"
    />
  </div>
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
// const apiKey = process.env.DOTENV.API_KEY;
import AppSearch from "../components/Search.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

import axios from "axios";

export default {
  components: {
    AppSearch,
    VueTailwindPagination,
  },
  data() {
    return {
      teams: [],
      perPage: 10,
      pages: [],
      searchString: "",
      currentPage: 1,
      pages: [],
      total: null,
    };
  },
  methods: {
     paginate(teams) {
      let page = this.currentPage;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;

      return teams.slice(from, to);
    },
    onPageClick(event) {
      this.currentPage = event;
    },
    handleSubmit(obj) {
      this.teams = obj.result_posts;
      if (obj.no_results_text) {
        this.$refs.not_found.innerText = obj.no_results_text;
      }
    },
    handleInput(obj) {
      this.teams = obj.result_posts;
    },
  },
  computed: {
    key() {
      return apiKey;
    },
       displayedPosts() {
      return this.paginate(this.teams);
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
      this.total = response.data.teams.length;
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
