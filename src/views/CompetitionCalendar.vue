<template>
  <app-preloader v-if="isLoading" />

  <div
    v-if="!isLoading"
    class="container mx-auto max-w-screen-xl px-3 box-border"
  >
    <h1 class="text-center">Календарь лиги</h1>

    <app-breadcrumbs :breadcrumbs="breadCrumbs" />

    <app-date-filter @handle-inputs="handleDateInputs" />

    <table class="min-w-full border-collapse block md:table">
      <thead class="block md:table-header-group">
        <tr
          class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative"
        >
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Дата
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Время
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Статус
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Команды участники
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Счёт в основное время
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Cчёт в дополнительное время
          </th>
          <th
            class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"
          >
            Пенальти
          </th>
        </tr>
      </thead>
      <tbody class="block md:table-row-group">
        <tr
          class="bg-gray-300 border border-grey-500 md:border-none block md:table-row"
          v-for="match in matches"
          :key="match.id"
        >
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold">Дата</span>
            <span v-if="match.utcDate">{{ setDate(match.utcDate) }} </span>
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold">Время</span>
            <span v-if="match.utcDate">{{ setTime(match.utcDate) }}</span>
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold">Статус</span>
            <span v-if="match.status">{{ match.status }}</span>
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold"
              >Команды участники</span
            >
            <span v-if="match.homeTeam.name && match.awayTeam.name"
              >{{ match.homeTeam.name }} - {{ match.awayTeam.name }}</span
            >
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold"
              >Счёт в основное время</span
            >
            <span
              v-if="
                match.score.fullTime.homeTeam && match.score.fullTime.awayTeam
              "
            >
              {{ match.score.fullTime.homeTeam }} :
              {{ match.score.fullTime.awayTeam }}
            </span>
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold"
              >Счёт в дополнительное время</span
            >
            <span
              v-if="
                match.score.extraTime.homeTeam && match.score.extraTime.awayTeam
              "
            >
              {{ match.score.extraTime.homeTeam }} :
              {{ match.score.extraTime.awayTeam }}</span
            >
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          >
            <span class="inline-block w-1/3 md:hidden font-bold">Пенальти</span>
            <span
              v-if="
                match.score.penalties.homeTeam && match.score.penalties.awayTeam
              "
            >
              {{ match.score.penalties.homeTeam }} :
              {{ match.score.penalties.awayTeam }}</span
            >
          </td>
          <td
            class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
          ></td>
        </tr>
      </tbody>
    </table>

    <div class="mt-10 mx-auto" v-if="errorMessage">
      <h2 class="font-bold text-centers md:text-xs">{{ errorMessage }}</h2>
    </div>
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import AppDateFilter from "../components/DateFilter.vue";
import AppPreloader from "../components/Preloader.vue";

import axios from "axios";
const apiKey = process.env.VUE_APP_API_KEY;

export default {
  components: {
    AppSearch,
    AppBreadcrumbs,
    AppDateFilter,
    AppPreloader,
  },
  data() {
    return {
      matches: [],
      errorMessage: "",
      competition: null,
      breadCrumbs: [],
      dateFrom: null,
      dateTo: null,
      isLoading: false,
      errorMessage: "",
    };
  },
  computed: {},
  methods: {
    setTime(dt) {
      let d = new Date(dt);
      let minutes =
        d.getUTCMinutes() == "0" ? d.getUTCMinutes() + "0" : d.getUTCMinutes();
      return d.getUTCHours() + " : " + minutes;
    },
    setDate(dt) {
      //console.log(dt);
      let d = new Date(dt);
      let month = d.getMonth() + 1;
      let date = `${d.getDate()}-${month}-${d.getFullYear()}`;
      return date;
    },
    handleDateInputs(from, to) {
      this.dateFrom = from ?? 0;
      this.dateTo = to ?? 0;

      if (from || to) {
        let filteredMatches = this.matches.filter(function (item) {
          let dateUtc = new Date(item.utcDate);
          //console.log(dateUtc);

          if (from && to) {
            // console.log(dateUtc.getTime() >= from.getTime() && dateUtc.getTime() <= to.getTime() + '' + 'from-to');
            return (
              dateUtc.getTime() >= from.getTime() &&
              dateUtc.getTime() <= to.getTime()
            );
          } else if (from && !to) {
            console.log(dateUtc.getTime() >= from.getTime());

            return dateUtc.getTime() >= from.getTime();
          } else if (to && !from) {
            //console.log(dateUtc.getTime() >= from.getTime() + + '' + 'to');

            return dateUtc.getTime() <= to.getTime();
          }

          return true;
        });

        this.matches = filteredMatches;
        this.total = filteredMatches.length;
      }
    },
  },
  mounted() {
    this.isLoading = true;
    axios({
      method: "get",
      url:
        "http://api.football-data.org/v2/competitions/" +
        parseInt(this.$route.params.id) +
        "/matches",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.matches = response.data.matches;
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
          s;
          console.log(err.request);
        } else {
          console.log("app mistake");
          // anything else
        }
      })
      .finally(() => {
        this.isLoading = false;
      });

    if (this.$route.params.code) {
      axios({
        method: "get",
        url:
          "http://api.football-data.org/v2/competitions/" +
          this.$route.params.code,
        headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
      })
        .then((response) => {
          console.log(this.$route.params.code);
          this.breadCrumbs = [{ name: "Лиги" }, { name: response.data.name }];
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<!-- mounted() {
    this.$watch(
      (vm) => [vm.dateFrom, vm.dateTo],
      (val) => {
        if (this.dateFrom && this.dateTo) {
          axios({
            method: "get",
            url:
              "http://api.football-data.org/v2/competitions/{id}/matches?dateFrom=" +
              this.dateFrom +
              "&dateTo=" +
              this.dateTo,
            headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
          }).then((response) => {
            console.log(response);
          });
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );
  }, -->
