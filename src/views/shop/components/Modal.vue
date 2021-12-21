<template>
  <div class="js_test" v-if="isOpen">
    <div class="modal" @click.self="closeModal">
      <div class="modal__container">
        <div class="modal__image">
          <img :src='data.mainImage' alt="shirt" width="330" height="330">
          <div class="modal__variations" >
            <div class="modal__variations_sub"
                 v-for="(minImage, index) in data.images" :key="index">
              <input type="radio" id="img_radio1" name="img_radio"
                     value="1" checked v-model="checked">
              <label for="img_radio1">
                <img :src="minImage" alt="clothes1" height="50" width="50">
              </label>
            </div>
          </div>
        </div>
        <div class="modal__content">
          <h1 class="modal__title">{{data.title}}</h1>
          <div class="modal__block">
            <div>
              <h2 class="modal__price">{{data.price}} баллов</h2>
              <button v-if="userInfo.score > 0" class="modal__btn" type="button"
                      @click="order">Заказать</button>
              <button v-else
                      class="modal__btn--pts" type="button" @click="order">
                Попросить {{Math.abs(getNewPoints())}} баллов
              </button>
            </div>
            <div class="modal__balance">
              <div>
                <p class="modal__text">Твой баланс:</p>
                <p class='modal__pts'>{{userInfo.score}} баллов</p>
              </div>
              <div class="modal__bags">
                <img src="@/assets/bags.png" alt="bags" width="40" height="41">
              </div>
            </div>
          </div>
          <p class="modal--info__text">Цвета:</p>
          <div class="modal--info__blockRadio">
            <div class="modal--info__radio">
              <input id="color_radio1" name="radio"  type="radio" value="1" checked >
              <label  for="color_radio1">
                <img src="@/assets/blue.svg" alt="blue" height="24" width="23">
                Синий
              </label>
            </div>
            <div class="modal--info__radio">
              <input id="color_radio2" name="radio"  value="2" type="radio" >
              <label  for="color_radio2">
                <img src="@/assets/whitish.svg" alt="whitish" width="23" height="24">
                Бежевый
              </label>
            </div>
            <div class="modal--info__radio">
              <input id="color_radio3" name="radio"  value="3" type="radio" >
              <label  for="color_radio3">
                <img src="@/assets/gray.svg" alt="gray" height="24" width="23">
                Серый
              </label>
            </div>
          </div>
          <p class="modal--info__text">Размер:</p>
          <div class="modal--info__blockSize">
            <div class="modal--info__size">
              <input id="radio4" name="size"  type="radio" value="4" checked >
              <label  for="radio4">S</label>
            </div>
            <div class="modal--info__size">
              <input id="radio5" name="size"  value="5" type="radio" >
              <label  for="radio5">M</label>
            </div>
            <div class="modal--info__size">
              <input id="radio6" name="size"  value="6" type="radio" >
              <label  for="radio6">L</label>
            </div>
          </div>
          <div class="modal--info__details">
            <h2>Детали</h2>
            <p>{{data.description}}</p>
          </div>
          <div class="modal--info__howTo">
            <h2>Как выбрать размер:</h2>
            <p>Написать дяде Рику для уточнения.</p>
          </div>
        </div>
        <button class="modal__btn--close" type="button"
                @click="closeModal">
          <img src="@/assets/close-big.svg" width="32" height="32" alt="close">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Modal',
  props: {
    isOpen: Boolean,
    data: Object,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
      checked: true,
    };
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo',
    }),
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    openModal() {
      this.$emit('open');
    },
    order() {
      this.closeModal();
      if (this.userInfo.score <= 0) {
        alert('У вас недостаточно средств!');

        return;
      }
      this.$store.commit('setNewScore', this.data.price);
    },
    getNewPoints() {
      return this.userInfo.score - this.data.price;
    },
  },
};
</script>

<style scoped>
  .modal__variations_sub {
    display: flex;
  }
  .modal__btn--pts {
    background: #4b4b07;
    box-shadow: 0 2px 4px rgba(28, 24, 25, 0.1);
    border-radius: 8px;
    border: none;
    width: 184px;
    height: 36px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    padding: 6px 0;
  }
  .modal__btn--pts:hover {
    background: #38ff93;
  }
</style>
