<template>
  <div id="app">
    <modal :is-open="isShowModal" @close="closeModal"
           :data="modalData"
           @order="setScore"
           :current-score="this.user.score"></modal>
    <div class="container">
      <header class="header">
        <div class="header__block">
          <div>
            <img src="./assets/KolesaGroup.png"  height="35" width="215" alt="Kolesa logo">
          </div>
          <SearchBlock></SearchBlock>
          <info-block @userInfo="userInfo" :user="user"></info-block>
        </div>
      </header>
    </div>
    <div class="container">
      <main class="main">
        <Nav></Nav>
        <div class="main__content">
          <img class="main__banner" src="@/assets/image.jpg"
               alt="banner" width="1038" height="335">
          <Hotkey></Hotkey>
          <RadioFilter :clothes="this.clothes"
                :accesories="this.accesories"
                @radioAll="onRadioChange"
                @radioClothes="onRadioChange"
                @radioAccesories="onRadioChange">
          </RadioFilter>
          <media-card :is-open="isShowModal" @open="openModal"
                @cardData="openCard" @updateClothes="setClothes"
                @updateAccesories="setAccesories"
                :only-cloth="this.clothes"
                :only-accesories="this.accesories"
                :choice="myChoice">
          </media-card>
        </div>
      </main>
    </div>
<Footer></Footer>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import MediaCard from './components/MediaCard.vue';
import InfoBlock from './components/InfoBlock.vue';
import SearchBlock from './components/SearchBlock.vue';
import Nav from './components/Nav.vue';
import Hotkey from './components/Hotkey.vue';
import RadioFilter from './components/RadioFilter.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    InfoBlock,
    Modal,
    MediaCard,
    SearchBlock,
    Nav,
    Hotkey,
    RadioFilter,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      user: {},
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
    userInfo(info) {
      this.user = info;
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
