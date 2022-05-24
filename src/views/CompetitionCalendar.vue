<template>
  <div class="container mx-auto max-w-screen-xl px-3 box-border">
      <div class="text-center"><h1>Календарь лиги</h1> </div>  
    <app-breadcrumbs :breadcrumbs="breadCrumbs" />
    <app-date-filter />
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
        <tr v-for="competition in competitions" :key="competition.id">
          <td class="p-3 text-sm whitespace-nowrap">{{}}</td>
          <td class="p-3 text-sm whitespace-nowrap">{{}}</td>
          <td class="p-3 text-sm whitespace-nowrap">{{}}</td>
          <td class="p-3 text-sm whitespace-nowrap">{{}} - {{}}</td>

          <td class="p-3 text-sm whitespace-nowrap">
            {{}} :
            {{}}
          </td>
          <td class="p-3 text-sm whitespace-nowrap">
            {{}} :
            {{}}
          </td>
          <td class="p-3 text-sm whitespace-nowrap">
            {{}} :
            {{}}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-3 font-bold">
      <h3>{{ message }}</h3>
    </div>
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import AppDateFilter from "../components/DateFilter.vue";
import axios from "axios";
const apiKey = process.env.VUE_APP_API_KEY;

export default {
  components: {
    AppSearch,
    AppBreadcrumbs,
    AppDateFilter,
  },
  data() {
    return {
      competitions: [],
      message: "",
      competition: null,
      breadCrumbs: [],
    };
  },
  computed: {
    breadCrumbs() {
      return ["Лиги", this.competition];
    },
  },
  mounted() {
    axios({
      method: "get",
      url:
        "http://api.football-data.org/v2/competitions/" +
        parseInt(this.$route.params.id) +
        "/matches",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.competitions = response;
      })
      .catch((err) => {
        console.log("error");
        // this.message = "The resource you are looking for is restricted. Please pass a valid API token and check your subscription for permission.";
        this.message = err;
        throw err;
      });

    axios({
      method: "get",
      url:
        "http://api.football-data.org/v2/competitions/" +
        parseInt(this.$route.params.id),
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.breadCrumbs = ["Лиги", this.response.data.name];
      })
      .catch(() => {
        console.log(error);
      });

    this.competition = this.$route.params.competition_name;
  },
};
</script>