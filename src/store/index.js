import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      team: "",
    };
  },
  getters: {
    setTeam: (state) => state.team,
  },

  mutations: {
    changeName(state, payload) {
      state.team = payload;
    },
  },
});

export default store;
