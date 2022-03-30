<template>
  <div class="container">
    <h1>Календарь команды</h1>
    <p>«Приложение для просмотра спортивной статистики «SoccerStat»»</p>
    <app-breadcrumbs :breadcrumb="team" :main="home_breadcrumb" />
    <!-- {{ matches }} -->
    {{ setTime }}
    <table class="resp-tab">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Время</th>
          <th>Статус</th>
          <th>Названия команд участвующих в матче</th>
          <th>
            Счёт. Счёт в основное время, счёт в дополнительное время, итог
            пенальти.
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.id">
          <td><span>data</span>{{ setDate(match.utcDate)}}</td>
          <td><span>time</span>{{ setTime(match.utcDate)}}</td>
          <td><span>status</span>{{ match.status }}</td>
          <td>{{ match.homeTeam.name }} - {{ match.awayTeam.name }}</td>
          <td><span>score</span>Контент 5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import axios from "axios";
//Вызов при переходе на страницу лиги - GET
//где {id} - competitions[].id

export default {
  components: {
    AppSearch,
    AppBreadcrumbs,
  },
  data() {
    return {
      team: null,
      matches: [],
      home_breadcrumb: "Команды",
    };
  },
  methods: {
    setTime(dt){
      let d = new Date(dt);
    let minutes = d.getUTCMinutes() == '0' ? d.getUTCMinutes() + '0' : d.getUTCMinutes();
      return d.getUTCHours() + " : " + minutes;
    },
    setDate(dt){
      let d = new Date(dt);
      let day = d.getDay() == '0' ? '' : d.getDay();
    let date = d.getDay() + '-' + d.getUTCMonth() + '-' + d.getUTCFullYear();
      return date;
  },
  },
  created() {
    axios({
      method: "get",
      url:
        "https://api.football-data.org/v2/teams/" +
        parseInt(this.$route.params.id) +
        "/matches",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.matches = response.data.matches;
      })
      .catch(() => {
        console.log("error");
      });
    axios({
      method: "get",
      url:
        "http://api.football-data.org/v2/teams/" +
        parseInt(this.$route.params.id),
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.team = response.data.name;
      })
      .catch(() => {
        console.log("error");
      });
  },
};
</script>
