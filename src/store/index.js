import Vue from 'vue';
import Vuex from 'vuex';
import { getPage } from '../services/characters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  getters: {
    getCharactersFromPage: (state) => state.characters.results,
    getPreviousPage: (state) => state.characters.previous,
    getNextPage: (state) => state.characters.next,
  },
  mutations: {
    setPageOfCharacters: (state, data) => {
      state.characters = data;
    },
  },
  actions: {
    fetchPageOfCharacters: async (context, path) => {
      context.commit('setPageOfCharacters', await getPage(path));
    },
  },
  modules: {
  },
});
