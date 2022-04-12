<template>
  <div class="container">
    <h1>Календарь команды</h1>
    <p>«Приложение для просмотра спортивной статистики «SoccerStat»»</p>
    <app-breadcrumbs :breadcrumbs="breadCrumbs" />
    {{ teams }}
    <table class="resp-tab">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Время</th>
          <th>Статус</th>
          <th>Названия команд участвующих в матче</th>
          <th>
            <tr>
              <td>Счёт.</td>
              <td>Счёт в основное время</td>
              <td>счёт в дополнительное время</td>
              <td>итог пенальти.</td>
            </tr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="match in matches" :key="match.id">
          <td><span>data</span>{{ setDate(match.utcDate) }}</td>
          <td><span>time</span>{{ setTime(match.utcDate) }}</td>
          <td><span>status</span>{{ match.status }}</td>
          <td>{{ match.homeTeam.name }} - {{ match.awayTeam.name }}</td>
          <td>
            <tr>
              <td>{{ match.score.fullTime.homeTeam }}</td>
              <td>{{ match.score.fullTime.awayTeam }}</td>
              <td>{{ match.score.extraTime.homeTeam }}</td>
              <td>{{ match.score.extraTime.awayTeam }}</td>
              <td>{{ match.score.penalties.homeTeam }}</td>
              <td>{{ match.score.penalties.awayTeam }}</td>
            </tr>
          </td>
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
    };
  },
  methods: {
    setTime(dt) {
      let d = new Date(dt);
      let minutes =
        d.getUTCMinutes() == "0" ? d.getUTCMinutes() + "0" : d.getUTCMinutes();
      return d.getUTCHours() + " : " + minutes;
    },
    setDate(dt) {
      let d = new Date(dt);
      let day = d.getDay() == "0" ? "" : d.getDay();
      let date = d.getDay() + "-" + d.getUTCMonth() + "-" + d.getUTCFullYear();
      return date;
    },
  },
  computed: {
    breadCrumbs() {
      return { teams: "Команды", name: this.team };
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
