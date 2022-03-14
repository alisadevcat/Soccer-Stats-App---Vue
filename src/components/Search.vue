<template>
  <form
    method="get"
    role="search"
    action="{{ site.url }}"
    class="site-search site-nav__search"
  >
    <input
      type="search"
      name="s"
      value=""
      class="site-search__input js-search-field"
      placeholder="Search?"
    />
    <button class="site-search__btn">
      <span class="u-visually-hidden">
          <img src="../../src/assets/images/search.svg">
      </span>
    </button>
  </form>
</template>

<script>
export default {
data() {
    return {
      searchString: null,
      oldSearchString: null,
      searchedVideos: [],
      selectedPage: 0,
      videosPerPage: 0,
      videoChunks: []
    };
  },
 methods: {
    search() {
      this.videosPerPage = 10;
      this.selectedPage = 0;
      if (
        this.searchString !== "" &&
        this.oldSearchString !== this.searchString
      ) {
        this.searchedVideos = this.allVideos(null, this.searchString);
        this.videoChunks = _.chunk(this.searchedVideos, this.videosPerPage);
      }
      this.oldSearchString = this.searchString;
    },
    selectPerPageCount(event) {
      this.selectedPage = 0;
      this.videosPerPage = event.target.value;
      this.videoChunks = _.chunk(this.searchedVideos, this.videosPerPage);
    },
    selectPage(event) {
      this.selectedPage = event.target.text - 1;
    },
  }
};
</script>