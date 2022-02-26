<template>
  <div class="container">
    <h1>Home</h1>
    <p>«Приложение для просмотра спортивной статистики «SoccerStat»»</p>
    <app-search/>
    <table class="resp-tab">
      <thead>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
          <th>Заголовок 3</th>
          <th>Заголовок 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span>Заголовок 1</span>Контент 1</td>
          <td><span>Заголовок 2</span>Контент 1</td>
          <td><span>Заголовок 3</span>Контент 1</td>
          <td><span>Заголовок 4</span>Контент 1</td>
        </tr>
        <!-- Еще строки -->
        <tr>
          <td><span>Заголовок 1</span>Контент 5</td>
          <td><span>Заголовок 2</span>Контент 5</td>
          <td><span>Заголовок 3</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 5</td>
        </tr>
         <tr>
          <td><span>Заголовок 1</span>Контент 5</td>
          <td><span>Заголовок 2</span>Контент 5</td>
          <td><span>Заголовок 3</span>Контент 5</td>
          <td><span>Заголовок 4</span>Контент 5</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import AppSearch from "../components/Search.vue";

export default {
  components:{
    AppSearch
  }
};
</script>