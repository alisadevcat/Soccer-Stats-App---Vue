<template>
  <div class="container">
    <h1>Лиги</h1>
    <app-search />

    <div class="league-cards">
      <div class="card" v-for="item in displayedPosts" :key="item.id">
        <router-link :to="{ name: 'league-calendar', params: { id: item.id } }">
          <div class="card-content">
            <p class="card-title">League {{ item.name }}</p>
            <p class="card-subtitle">Country{{ item.area.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
 <div class="clearfix btn-group col-md-2 offset-md-5">
 <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> </button>
 <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)" :key ="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
 <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
 </div>
<!-- <app-pagination :page="page" :pages="pages"/>  -->
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
      perPage: 5,
      pages:[]
    };
  },
  methods: {
     setPages () {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
     paginate (posts) {
       let page = this.page;
       let perPage = this.perPage;
       let from = (page * perPage) - perPage;
       let to = (page * perPage);
       return posts.slice(from, to);
     }
  },
  computed: {
    key() {
      return apiKey;
    },
     displayedPosts () {
       return this.paginate(this.posts);
     }
  },
  created() {
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/competitions",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    }).then((response) => {
      this.posts = response.data.competitions;
    });
  },
  watch: {
    posts () {
      this.setPages();
    }
  }
};
</script>
