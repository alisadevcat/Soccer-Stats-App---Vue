<template>
  <app-preloader v-if="isLoading" />

  <div
    v-if="!isLoading"
    class="container mx-auto max-w-screen-xl px-3 box-border"
  >
    <div class="text-center">
      <h1>Лиги</h1>
    </div>

    <app-search
      :posts="posts"
      :originalPosts="originalPosts"
      @handle-submit="handleSubmit"
      @handle-input="handleInput"
    />

    <div
      class="grid xl:grid-cols-14 lg:grid-cols-4 md:grid-cols-3 md:gap-3 sm:grid-cols-16 sm:gap-1 gap-4 place-content-center"
    >
      <div
        class="border rounded-sm border-black border-solid py-12 text-center"
        v-for="item in displayedPosts"
        :key="item.id"
      >
        <router-link
          :to="{
            name: 'competition-calendar',
            params: { id: item.id, code: item.code },
          }"
        >
          <div class="p-1.5">
            <p v-if="item.name">League: {{ item.name }}</p>
            <p v-if="item.area">Country: {{ item.area }}</p>
          </div>
        </router-link>
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
const baseUrl = "https://api.football-data.org/v2/competitions";
const apiKey = process.env.VUE_APP_API_KEY;
import AppSearch from "../components/Search.vue";

import axios from "axios";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import AppPreloader from "../components/Preloader.vue";

export default {
  components: {
    AppSearch,
    VueTailwindPagination,
    AppPreloader,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      perPage: 9,
      pages: [],
      originalPosts: [],
      total: null,
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
    handleSubmit(obj) {
      let search_results = [];

      obj.result_posts.forEach((el, index, arr) => {
        search_results[index] = {
          id: arr[index][0],
          name: arr[index][1],
          area: arr[index][2],
          code: arr[index][3],
        };
      });

      this.posts = search_results;
      this.total = this.posts.length;
      this.$refs.not_found.innerText = obj.no_results_text;
    },
    handleInput(obj) {
      this.posts = obj.result_posts;
      this.total = obj.result_posts.length;
      this.$refs.not_found.innerText = obj.no_results_text;
    },
    onPageClick(event) {
      this.currentPage = event;
    },
  },
  computed: {
    key() {
      return apiKey;
    },
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  mounted() {
    this.isLoading = true;
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/competitions",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.isLoading = true;

        let competitions = response.data?.competitions.map(
          (item) =>
            (item = {
              id: item.id,
              name: item.name,
              area: item.area.name,
              code: item.code,
            })
        );
        this.posts = competitions;
        this.originalPosts = competitions;
        this.total = competitions.length;
      })
      .catch((err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          // client never received a response, or request never left
        } else {
          // anything else
        }
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
