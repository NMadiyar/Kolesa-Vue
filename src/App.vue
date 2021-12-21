<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <div class="header__block">
          <div>
            <img src="./assets/KolesaGroup.png"  height="35" width="215" alt="Kolesa logo">
          </div>
          <SearchBlock></SearchBlock>
          <info-block></info-block>
        </div>
      </header>
    </div>
    <div class="container" style="display: flex">
      <Nav></Nav>
      <router-view>
      </router-view>
    </div>
<Footer></Footer>
  </div>
</template>

<script>
import InfoBlock from './layouts/components/InfoBlock.vue';
import SearchBlock from './layouts/components/SearchBlock.vue';
import Footer from './layouts/components/Footer.vue';
import Nav from './layouts/components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    InfoBlock,
    SearchBlock,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      clothes: [],
      accesories: [],
      myChoice: '',
    };
  },
  methods: {
    closeModal() {
      this.isShowModal = false;
    },
    openModal() {
      this.isShowModal = true;
    },
    openCard(data) {
      this.openModal();
      this.modalData = data;
    },
    setScore(cost) {
      this.closeModal();
      this.user.score -= cost;
      if (this.user.score <= 0) {
        alert('У вас недостаточно средств!');
      }
    },
    setClothes(clothes) {
      this.clothes = clothes;
    },
    setAccesories(accesories) {
      this.accesories = accesories;
    },
    onRadioChange(choice) {
      this.myChoice = choice;
    },
  },
};
</script>

<style lang="scss">
@import "src/styles/main";
</style>
