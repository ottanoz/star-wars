import Vue from 'vue';
import Vuex from 'vuex';
import {
  getPage,
  findCharacter,
  getCharacter,
} from '../services/characters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: {
      count: 0,
      results: [],
    },
    characterDetails: {},
    loadingCharacters: false,
  },
  getters: {
    getCharactersFromPage: (state) => state.characters.results,
    getTotalCharacters: (state) => state.characters.count,
    getPreviousPage: (state) => state.characters.previous,
    getNextPage: (state) => state.characters.next,
    getCharacterDetails: (state) => state.characterDetails,
    isLoading: (state) => state.loadingCharacters,
  },
  mutations: {
    setPageOfCharacters: (state, data) => {
      state.characters = data;
    },
    setCharacterDetails: (state, data) => {
      state.characterDetails = data;
    },
    setLoadingCharacters: (state, data) => {
      state.loadingCharacters = data;
    },
  },
  actions: {
    fetchPageOfCharacters: async (store, path) => {
      store.commit('setLoadingCharacters', true);
      store.commit('setPageOfCharacters', await getPage(path));
      store.commit('setLoadingCharacters', false);
    },
    findCharacter: async (store, searchTerm) => {
      store.commit('setLoadingCharacters', true);
      store.commit('setPageOfCharacters', await findCharacter(searchTerm));
      store.commit('setLoadingCharacters', false);
    },
    fetchCharacterDetails: async (store, id) => {
      store.commit('setLoadingCharacters', true);
      store.commit('setCharacterDetails', await getCharacter(id));
      store.commit('setLoadingCharacters', false);
    },
  },
});
