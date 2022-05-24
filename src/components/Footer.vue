<template>
  <footer class="pt-6">
   <div class="container mx-auto max-w-screen-xl px-3 box-border"> 
      <div class="flex pl-10">
        <div class="page-footer__inner">
              <router-link :to="{ name: 'home' }">
          </router-link>
        </div>
      </div>
       <div class="flex justify-center items-center">
      <p class="mb-2">
        <a href="/" title="Privacy" target="_blank">
           SoccerSTATS.com 
        </a>
      </p>
    </div>
    </div>
   
  </footer>
</template>

<script>
export default {};
</script>
