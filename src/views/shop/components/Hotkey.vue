<template>
  <div class="main__buttons">
    <button type="button" class="main__btn main__btn--get">
      <img class="main__btn--image" src="@/assets/plus.svg" alt="plus"
           height="41" width="40">Получить баллы
    </button>
    <button type="button" class="main__btn main__btn--question" @click="goToPage">
      <img class="main__btn--image" src="@/assets/question.png" alt="question"
           width="40" height="41">Как получить баллы?</button>
    <button type="button" class="main__btn main__btn--gift">
      <img class="main__btn--image" src="@/assets/gift.png" alt="gift"
           height="41" width="40">Подарить баллы</button>
  </div>
</template>

<script>
export default {
  name: 'Hotkey',
  methods: {
    goToPage() {
      this.$router.push('/shop/how-to-get-points');
    },
  },
};
</script>
