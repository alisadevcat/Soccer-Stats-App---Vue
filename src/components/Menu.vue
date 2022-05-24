<template>
  <!-- navbar -->
  <nav class="bg-very-light-gray">
    <div>
      <div class="flex justify-start items-center container mx-auto">
        <div class="pl-10">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/images/soccer_logo.png" alt="Logo" />
          </router-link>
        </div>
        <ul class="flex flex-row justify-around">
          <li class="ml-10 text-hover-blue block flex-1 ">
            <router-link :to="{ name: 'competitions' }"> Лиги</router-link>
          </li>
          <li class="ml-10 text-hover-blue block flex-1">
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
