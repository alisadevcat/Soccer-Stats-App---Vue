<template>
  <div class="container mx-auto max-w-screen-xl px-3 box-border">
    <div class="text-center"><h1>Календарь лиги</h1></div>

    <app-breadcrumbs :breadcrumbs="breadCrumbs" />

    <app-date-filter @handle-inputs="handleDateInputs" />
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
            <span
              v-if="
                match.score.penalties.homeTeam && match.score.penalties.awayTeam
              "
            >
              {{ match.score.penalties.homeTeam }} :
              {{ match.score.penalties.awayTeam }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-10 font-bold" v-if="errorMessage">
      <h2>{{ errorMessage }}</h2>
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
      matches: [],
      errorMessage: "",
      competition: null,
      breadCrumbs: [],
      dateFrom: null,
      dateTo: null,
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
  },
  created() {
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