<template>
  <div class="container mx-auto max-w-screen-xl px-3 box-border">
    <h1>Календарь команды</h1>

      {{ total }}
     
    <app-breadcrumbs :breadcrumbs="breadCrumbs" />
    <app-date-filter @handle-inputs="handleDateInputs" />

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
          <tr v-for="match in displayedPosts" :key="match.id">
            <td class="p-3 text-sm whitespace-nowrap">
              {{match.utcDate}}<br>
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
import axios from "axios";

export default {
  components: {
    AppSearch,
    AppBreadcrumbs,
    AppDateFilter,
    VueTailwindPagination,
  },
  props: ["id", "team_name"],
  data() {
    return {
      matches: [],
      team: null,
      breadCrumbs: [],
      team_name: " ",
      currentPage: 1,
      perPage: 10,
      originalPosts: [],
      total: null,
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
    handleDateInputs(from, to) {
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
      console.log(filteredMatches);
      return filteredMatches;
    },
    onPageClick(event) {
      this.currentPage = event;
    },
  },
  computed:{
    displayedPosts() {
      return this.paginate(this.matches);
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
        this.originalPosts = this.matches;
        this.total = this.matches.length;
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
