<template>
  <div class="container">
    <h1>Команды</h1>
    <app-search />
    <div class="team-cards">
       <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
         <div class="card">
        <div class="card-content">
          <p class="card-title">Team</p>
           <figure class="card-image">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
        </div>
      </div>
    </div>
    <app-pagination/>
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
// const apiKey = process.env.DOTENV.API_KEY;
import AppSearch from "../components/Search.vue";
import AppPagination from "../components/Pagination.vue"

//Вызов при переходе на страницу лиги - GET http://api.football-data.org/v2/competitions/{id}/matches
//где {id} - competitions[].id 

export default {
  components: {
    AppSearch,
    AppPagination
  },
};
</script>