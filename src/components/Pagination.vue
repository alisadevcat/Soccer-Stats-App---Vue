<template>
  <div class="pagination row">
    <ul class="pagination-list">
      <span class="pagination-button">
        <button type="button" v-if="page != 1" @click="page--">Previous</button>
      </span>
      <button
        type="button"
        v-for="pageNumber in pages.slice(page - 1, page + 5)"
        :key="pageNumber"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </button>
      
      <span class="pagination-button">
        <button type="button" @click="page++" v-if="page < pages.length">
          Next
        </button>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    pages: Array,
    page: Number
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


<!-- <div class="clearfix btn-group col-md-2 offset-md-5">
 <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> </button>
 <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)" :key ="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
 <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
 </div> -->