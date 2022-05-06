<template>
  <!-- navbar -->
  <nav class="navbar bg-secondary">
    <div>
      <div class="site-nav container-fluid">
        <div class="site-nav__logo">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/images/soccer_logo.png" alt="Logo" />
          </router-link>
        </div>
        <ul class="site-nav__list row">
          <li class="ml-1 text-hover-blue display-block">
            <router-link :to="{ name: 'competitions' }"> Лиги</router-link>
          </li>
          <li class="ml-1 text-hover-blue display-block">
            <router-link :to="{ name: 'teams' }"> Команды</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
