import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      score: 0,
      avatarUrl: '',
    },
    clothes: {},
    accesories: {},
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },
    updateClothes(state, response) {
      state.clothes = response;
    },
    updateAccesories(state, response) {
      state.accesories = response;
    },
  },
  actions: {
    getUserInfo({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data')
        .then((response) => {
          if (response && Object.keys(response).length) {
            commit('updateUserInfo', response.data);
          }
        });
    },
    fetchClothes({ commit }) {
      axios.get('templates/-_RLsEGjof6i/data')
        .then((response) => {
          console.log(response.data);
          commit('updateClothes', response.data);
        });
    },
    fetchAccesories({ commit }) {
      axios.get('templates/q3OPxRyEcPvP/data')
        .then((res) => {
          commit('updateAccesories', res.data);
        });
    },
  },
  modules: {
  },
});
