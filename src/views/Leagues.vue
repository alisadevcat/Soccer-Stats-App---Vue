<template>
  <div class="container">
    <h1>Лиги</h1>

    <app-search />
    <div class="league-cards">
      <div class="card" v-for="item in leagues" :key="item.id">
        <div class="card-content">
          <p class="card-title">League {{item.name}}</p>
          <p class="card-subtitle">Country{{item.area.name}}</p>
        </div>
      </div>
      <!-- <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">League</p>
          <p class="card-subtitle">Country</p>
        </div>
      </div> -->
    </div>
    <app-pagination />
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
const apiKey = process.env.VUE_APP_API_KEY;
import AppSearch from "../components/Search.vue";
import AppPagination from "../components/Pagination.vue";
import axios from "axios";

//Вызов при переходе на страницу лиги - GET http://api.football-data.org/v2/competitions/{id}/matches
//где {id} - competitions[].id

export default {
  components: {
    AppSearch,
    AppPagination,
  },
  data() {
    return {
      leagues: [],
    };
  },
  computed: {
    key(){
     return apiKey;
    }
  },
 mounted() {
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/competitions",
      headers: { "X-Auth-Token": '1e76ed510bd246519dedbf03833e5322' },
    })
      .then((response)=>{this.leagues = response.data.competitions}
      );
      // .catch(function (error) {
      //   console.log("error");
      // });
  },
};
</script>