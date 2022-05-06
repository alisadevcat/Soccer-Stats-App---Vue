<template>
  <div class="container mx-auto max-w-screen-xl px-3 box-border">
    <h1>Календарь команды</h1>
    <app-breadcrumbs :breadcrumbs="breadCrumbs" />

    <app-date-search />
    <div class="oveflow-auto rounded-lg shadow">
      <table class="w-full pt-2">
        <thead class="bg-gray-200 border-b-2 border-gray-500">
          <tr>
            <th class="py-2">Дата</th>
            <th class="py-2">Время</th>
            <th class="py-2">Статус</th>
            <th class="py-2">Команды участники</th>
            <th class="py-2">Счёт в основное время</th>
            <th class="py-2">Cчёт в дополнительное время</th>
            <th class="py-2">Пенальти</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="match in matches" :key="match.id">
            <td class="p-3 text-sm whitespace-nowrap">
              {{ setDate(match.utcDate) }}
            </td>
            <td class="p-3 text-sm whitespace-nowrap">
              {{ setTime(match.utcDate) }}
            </td>
            <td class="p-3 text-sm whitespace-nowrap">{{ match.status }}</td>
            <td class="p-3 text-sm whitespace-nowrap">
              {{ match.homeTeam.name }} - {{ match.awayTeam.name }}
            </td>

            <td class="p-3 text-sm whitespace-nowrap">
              {{ match.score.fullTime.homeTeam }} :
              {{ match.score.fullTime.awayTeam }}
            </td>
            <td class="p-3 text-sm whitespace-nowrap">
              {{ match.score.extraTime.homeTeam }} :
              {{ match.score.extraTime.awayTeam }}
            </td>
            <td class="p-3 text-sm whitespace-nowrap">
              {{ match.score.penalties.homeTeam }} :
              {{ match.score.penalties.awayTeam }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import AppDateSearch from "../components/DateSearch.vue";
import axios from "axios";
//Вызов при переходе на страницу лиги - GET
//где {id} - competitions[].id

export default {
  components: {
    AppSearch,
    AppBreadcrumbs,
    AppDateSearch,
  },
  props: ["id", "team_name"],
  data() {
    return {
      matches: [],
      team: null,
      breadCrumbs: [],
      team_name: " ",
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
        this.team_name = response.data.name;
        this.breadCrumbs = ["Команды", this.team_name];
      })
      .catch(() => {
        console.log(error);
      });
  },
};
</script>
