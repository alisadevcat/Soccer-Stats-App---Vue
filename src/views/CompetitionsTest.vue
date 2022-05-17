
   <template>
  <div class="container mx-auto max-w-screen-xl px-3 box-border">
    <h1>Лиги</h1>
    <app-search
      :posts="posts"
      :originalPosts="originalposts"
      @handle-submit="handleSubmit"
      @handle-input="handleInput"
    />

    <div class="league-cards">
      <div class="card" v-for="item in displayedPosts" :key="item.id">
        <router-link :to="{ name: 'league-calendar', params: { id: item.id } }">
          <div class="card-content">
            <p class="card-title">League: {{ item.name }}</p>
            <p class="card-subtitle">Country: {{ item.area }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <p ref="not_found"></p>
    </div>

   <app-pagination :perPage="perPage" :posts="posts" @show-posts="showPosts"/>
  </div>
</template>

<script>
const baseUrl = "https://api.football-data.org/v2/competitions";
const apiKey = process.env.VUE_APP_API_KEY;
import AppSearch from "../components/Search.vue";
import AppPagination from "../components/Pagination.vue";

import axios from "axios";

export default {
  components: {
    AppSearch,
    AppPagination,
  },
  data() {
    return {
      posts: [],
      perPage: 9,
      pages: [],
      originalposts: [],
      displayedPosts: []
    };
  },
  methods: {
    // handleSubmit(obj) {
    //   let results = obj.result_posts.map(
    //     (item, index, array) =>
    //       (item = {
    //         id: array[0][0],
    //         name: array[0][1],
    //         area: array[0][2],
    //       })
    //   );
    //   this.posts = results;

    //   if (obj.no_results_text) {
    //     this.$refs.not_found.innerText = obj.no_results_text;
    //   }
    // },
    // handleInput(obj) {
    //   this.posts = obj.result_posts;
    // },
    showPosts(res){
      this.displayedPosts = res;
      console.log(this.displayedPosts);
    }
  },
  computed: {
    key() {
      return apiKey;
    },
  },
  created() {
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/competitions",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    }).then((response) => {
      let competitions = response.data.competitions.map(
        (item) =>
          (item = { id: item.id, name: item.name, area: item.area.name })
      );
      this.posts = competitions;
      this.originalposts = competitions;
    });
  }
};
</script>


<style>
.pagination {
  list-style-type: none;
}
.pagination-item {
  display: inline-block;
  padding: 3px;
}
.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>