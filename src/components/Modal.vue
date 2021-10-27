<template>
  <div class="js_test" v-if="isOpen">
    <div class="modal" @click.self="closeModal">
      <div class="modal__container">
        <div class="modal__image">
          <img :src='data.mainImage' alt="shirt" width="330" height="330">
          <div class="modal__variations">
            <input type="radio" id="img_radio1" name="img_radio" value="1">
            <label for="img_radio1">
              <img src="@/assets/photo1.png" alt="clothes1" height="50" width="50">
            </label>
            <input type="radio" id="img_radio2" name="img_radio" value="2" checked>
            <label for="img_radio2">
              <img src="@/assets/photo2.png" alt="clothes2" height="50" width="50">
            </label>
            <input type="radio" id="img_radio3" name="img_radio" value="3">
            <label for="img_radio3">
              <img src="@/assets/photo3.png" alt="clothes3" height="50" width="50">
            </label>
          </div>
        </div>
        <div class="modal__content">
          <h1 class="modal__title">{{data.title}}</h1>
          <div class="modal__block">
            <div>
              <h2 class="modal__price">{{data.price}} баллов</h2>
              <button class="modal__btn" type="button" @click="order">Заказать</button>
            </div>
            <div class="modal__balance">
              <div>
                <p class="modal__text">Твой баланс:</p>
                <p class='modal__pts'>{{currentScore}} баллов</p>
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
export default {
  name: 'Modal',
  props: {
    isOpen: Boolean,
    data: Object,
    currentScore: Number,
  },
  data() {
    return {
      isShowModal: false,
      modalData: {},
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    openModal() {
      this.$emit('open');
    },
    order() {
      this.$emit('order', this.data.price);
    },
  },
};
</script>
