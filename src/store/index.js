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
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
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
  },
  modules: {
  },
});
