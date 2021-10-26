<template>
  <button class="header__info">
    <div>
      <img class="header__avatar" src="@/assets/MaskGroup.png"
           alt="avatar" width="44" height="44">
    </div>
    <div>
      <div class="header__name">{{info.name}}</div>
      <div class="header__pts">{{info.score}} баллов</div>
    </div>
  </button>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'InfoBlock',
  props: {
    user: Object,
  },
  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        this.info = response.data;
        this.$emit('userInfo', this.info);
      });
  },
  data() {
    return {
      info: '',
    };
  },
};
</script>
