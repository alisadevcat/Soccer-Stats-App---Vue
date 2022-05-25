<template>
  <div class="container mx-auto max-w-screen-xl px-3 box-border">
    <div class="text-center"><h1>Календарь лиги</h1></div>
    {{breadCrumbs}}
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
      <h3>{{ errorMessage }}</h3>
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
      errorMessage: "",
      competition: null,
      breadCrumbs: [],
    };
  },
  created() {
    axios({
      method: "get",
      url:
        "http://api.football-data.org/v2/competitions/" +
        parseInt(this.$route.params.id) + "/matches",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.competitions = response;
      })
      .catch((err) => {
        if (err.response) {
          this.errorMessage =
            "Не удалось загрузить данные из-за ошибки доступа";
          // client received an error response (5xx, 4xx)
          console.log(err.response);
        } else if (err.request) {
          // client never received a response, or request never left
          this.errorMessage = "Ошибка сети";
          console.log(err.request);
        } else {
          console.log("app mistake");
          // anything else
        }
      });

    axios({
      method: "get",
      url:
        "http://api.football-data.org/v2/competitions/" +
        parseInt(this.$route.params.id) + '/matches',
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.breadCrumbs = [{ name: "Лиги" }, { name: response.data.name }];
      });
  },
};
</script>