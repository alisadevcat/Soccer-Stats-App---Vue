<template>
  <footer class="page-footer">
   <div class="container-fluid"> 
      <div class="page-footer__content">
        <div class="page-footer__inner">
              <router-link :to="{ name: 'home' }">
          </router-link>
        </div>
      </div>
       <div class="page-footer__copyright">
      <p class="mb-2">
        <a href="https://www.google.com" title="Privacy" target="_blank">
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
