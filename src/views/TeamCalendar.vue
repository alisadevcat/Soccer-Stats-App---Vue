<template>
  <app-preloader v-if="isLoading" />
  <div
    v-if="!isLoading"
    class="container mx-auto max-w-screen-xl px-3 box-border"
  >
    <div class="text-center"><h1>Календарь команды</h1></div>

    <app-breadcrumbs :breadcrumbs="breadCrumbs" />
    <app-date-filter
      @handle-input-from="handleDateInputFrom"
      @handle-input-to="handleDateInputTo"
    />

    <div class="oveflow-auto rounded-lg shadow">
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
            v-for="match in displayedPosts"
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
              <span v-if="match.homeTeam.name && match.awayTeam.name">
                {{ match.homeTeam.name }} - {{ match.awayTeam.name }}</span
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
                  match.score.extraTime.homeTeam &&
                  match.score.extraTime.awayTeam
                "
              >
                {{ match.score.extraTime.homeTeam }} :
                {{ match.score.extraTime.awayTeam }}</span
              >
            </td>
            <td
              class="p-2 md:border md:border-grey-500 text-left block md:table-cell"
            >
              <span class="inline-block w-1/3 md:hidden font-bold"
                >Пенальти</span
              >
              <span
                v-if="
                  match.score.penalties.homeTeam &&
                  match.score.penalties.awayTeam
                "
              >
                {{ match.score.penalties.homeTeam }} :
                {{ match.score.penalties.awayTeam }}</span
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-10 font-bold" v-if="errorMessage">
        <h2>{{ errorMessage }}</h2>
      </div>
    </div>

    <div class="text-center">
      <p ref="not_found"></p>
    </div>

    <div class="py-4">
      <VueTailwindPagination
        :current="currentPage"
        :total="total"
        :per-page="perPage"
        @page-changed="onPageClick($event)"
      />
    </div>
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import AppDateFilter from "../components/DateFilter.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import AppPreloader from "../components/Preloader.vue";

import axios from "axios";

export default {
  components: {
    AppSearch,
    AppBreadcrumbs,
    AppDateFilter,
    AppPreloader,
    VueTailwindPagination,
  },
  data() {
    return {
      matches: [],
      team: null,
      breadCrumbs: [],
      currentPage: 1,
      perPage: 10,
      originalPosts: [],
      total: null,
      dateFrom: null,
      dateTo: null,
      isLoading: false,
      errorMessage: "",
    };
  },
  methods: {
    paginate(posts) {
      let page = this.currentPage;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;

      return posts.slice(from, to);
    },
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
    handleDateInputTo(to) {
      this.dateTo = to;
    },
    handleDateInputFrom(from) {
      this.dateFrom = from;
    },
    handleFromTo() {
      axios({
        method: "get",
        url:
          "https://api.football-data.org/v2/teams/"+  parseInt(this.$route.params.id) +"/matches?dateFrom=" +
          this.dateFrom +
          "&dateTo=" +
          this.dateTo,
        headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
      })
        .then((response) => {
          if (!this.matches) {
            this.$refs.not_found.innerText = "No results found";
          }
          this.matches = response.data?.matches;
          this.total = response.data?.matches.length;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    onPageClick(event) {
      this.currentPage = event;
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.matches);
    },
  },
  mounted() {
    this.isLoading = true;

    //watch dates
    this.$watch(
      (vm) => (vm.dateFrom, vm.dateTo),
      (val) => {

        if (this.dateFrom && this.dateTo) {
          this.handleFromTo();
          console.log("both");
        }

        this.matches = this.originalPosts;
        this.total = this.originalPosts.length;
        console.log("no values");
      }
    );

    //get all matches
    axios({
      method: "get",
      url:
        "https://api.football-data.org/v2/teams/" +
        parseInt(this.$route.params.id) +
        "/matches",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.matches = response.data?.matches;
        this.originalPosts = this.matches;
        this.total = this.matches.length;
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

    //breadcrumbs

    axios({
      method: "get",
      url:
        "http://api.football-data.org/v2/teams/" +
        parseInt(this.$route.params.id),
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.breadCrumbs = [{ name: "Команды" }, { name: response.data.name }];
      })
      .catch(() => {
        // console.log(error);
      });
  },
};
</script>


    <!-- handleDateInputs(dates) {
      if (dates.from || dates.to) {
        let filteredMatches = this.matches.filter(function (item) {
          let dateUtc = new Date(item.utcDate);
          //console.log(dateUtc);

          if (dates.from && dates.to) {
            // console.log(dateUtc.getTime() >= from.getTime() && dateUtc.getTime() <= to.getTime() + '' + 'from-to');
            return (
              dateUtc.getTime() >= dates.from.getTime() &&
              dateUtc.getTime() <= dates.to.getTime()
            );
          } else if (dates.from && !dates.to) {
            console.log(dateUtc.getTime() >= dates.from.getTime());

            return dateUtc.getTime() >= dates.from.getTime();
          } else if (dates.to && !dates.from) {
            //console.log(dateUtc.getTime() >= from.getTime() + + '' + 'to');

            return dateUtc.getTime() <= dates.to.getTime();
          }

          return true;
        });

        this.matches = filteredMatches;

        if (!this.matches) {
          this.$refs.not_found.innerText = obj.no_results_text =
            "No results found";
        }

        this.total = filteredMatches.length;
      } else {
        this.matches = this.originalPosts;
        this.total = this.originalPosts.length;
      }
    }, -->