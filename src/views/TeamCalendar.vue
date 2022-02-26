<template>
  <div class="container">
    <h1>Календарь команды</h1>
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

export default {
  components: {
    AppSearch,
    AppBreadcrumbs
  },
};
</script>