<template>
  <div class="container">
    <h1>Лиги</h1>
    <p>{{key}}</p>
    <app-search />
    <div class="league-cards">
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
    </div>
    <app-pagination />
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
const apiKey = process.env.VUE_APP_API_KEY;
import AppSearch from "../components/Search.vue";
import AppPagination from "../components/Pagination.vue";

//Вызов при переходе на страницу лиги - GET http://api.football-data.org/v2/competitions/{id}/matches
//где {id} - competitions[].id

export default {
  components: {
    AppSearch,
    AppPagination,
  },
  data() {
    return {};
  },
  computed: {
    key(){
     console.log(process.env.VUE_APP_API_KEY);
    }
  },
};
</script>