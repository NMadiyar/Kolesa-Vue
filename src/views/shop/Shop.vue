<template>
    <main class="main">
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
      <Modal :is-open="isShowModal" @close="closeModal"
             :data="modalData"
             >
      </Modal>
    </main>
</template>

<script>
import MediaCard from './components/MediaCard.vue';
import Hotkey from './components/Hotkey.vue';
import RadioFilter from './components/RadioFilter.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'Shop',
  components: {
    Modal,
    MediaCard,
    Hotkey,
    RadioFilter,
  },
  props: {
    user: Object,
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
