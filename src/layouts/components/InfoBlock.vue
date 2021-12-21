<template>
  <button class="header__info">
    <div>
      <img class="header__avatar" :src=userInfo.avatarUrl
           alt="avatar" width="44" height="44">
    </div>
    <div>
      <div class="header__name">{{userInfo.name}}</div>
      <div class="header__pts">{{userInfo.score}} баллов</div>
    </div>
  </button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'InfoBlock',
  mounted() {
    this.fetchUser();
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo',
    }),
  },
  methods: {
    fetchUser() {
      this.$store.dispatch('getUserInfo');
    },
  },
};
</script>
