<template>
  <div class="container">
    <h1>Календарь команды</h1>
    {{ matches }}
    <p>«Приложение для просмотра спортивной статистики «SoccerStat»»</p>
    <app-breadcrumbs />
    <table class="resp-tab">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Время</th>
          <th>Статус</th>
          <th>Названия команд участвующих в матче</th>
          <th>
            Счёт. Счёт в основное время, счёт в дополнительное время, итог
            пенальти.
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span>Заголовок 1</span>Контент 1</td>
          <td><span>Заголовок 2</span>Контент 1</td>
          <td><span>Заголовок 3</span>Контент 1</td>
          <td><span>Заголовок 4</span>Контент 1</td>
          <td><span>Заголовок 4</span>Контент 1</td>
        </tr>
        <!-- Еще строки -->
        <tr>
          <td><span>Заголовок 1</span>Контент 5</td>
          <td><span>Заголовок 2</span>Контент 5</td>
          <td><span>Заголовок 3</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 1</td>
        </tr>
        <tr>
          <td><span>Заголовок 1</span>Контент 5</td>
          <td><span>Заголовок 2</span>Контент 5</td>
          <td><span>Заголовок 3</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 1</td>
        </tr>
        <tr>
          <td><span>Заголовок 1</span>Контент 5</td>
          <td><span>Заголовок 2</span>Контент 5</td>
          <td><span>Заголовок 3</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import axios from "axios";
const apiKey = process.env.VUE_APP_API_KEY;
//Вызов при переходе на страницу лиги - GET
//где {id} - competitions[].id

export default {
  components: {
    AppSearch,
    AppBreadcrumbs,
  },
  data() {
    return {
      matches: null,
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "http://api.football-data.org/v2/competitions/2006/matches",
      headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    })
      .then((response) => {
        this.matches = response;
      })
      .catch(() => {
        console.log("error");
      });
  },
  
    //   axios({
    //     method: "get",
    //     url:
    //       "http://api.football-data.org/v2/competitions/" +
    //       this.$route.params.id +
    //       "/matches",
    //     headers: { "X-Auth-Token": "1e76ed510bd246519dedbf03833e5322" },
    //   })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch(() => {
    //       console.log("error");
    //     });
    // },}
};
</script>