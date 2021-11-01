<template>
  <div class="main--clothes js_clothes">
    <div class="main--clothes__element"
         v-for="item in setCards()" :key="item.id">
      <img :src='item.mainImage'
           alt="clothes" width="330" height="330"/>
      <div class="main--clothes__textBlock">
        <p class="main--clothes__new" v-if="item.isNew">
          NEW
        </p>
        <p class="main--clothes__pts">{{item.price}} баллов</p>
        <p class="main--clothes__text">{{item.title}}</p>
        <p class="main--clothes__size">Размеры S/M/L </p>
        <button type="button" class="main--clothes__btn"
            @click="openCard(item)">Заказать</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'MediaCard',
  props: {
    isOpen: Boolean,
    choice: String,
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.clothes = response.data;
        this.$emit('updateClothes', this.clothes);
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((res) => {
        this.accesories = res.data;
        this.$emit('updateAccesories', this.accesories);
      });
  },
  data() {
    return {
      clothes: [],
      accesories: [],
      isShowModal: false,
      modalData: {},
      newData: {},
      oldData: {},
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    openModal() {
      this.$emit('open');
    },
    openCard(data) {
      this.$emit('cardData', data);
    },
    setCards() {
      if (this.choice === '2') {
        return this.clothesSorted();
      } if (this.choice === '3') {
        return this.accesoriesSorted();
      } return this.allProductsSorted();
    },
    allItems() {
      return [...this.clothes, ...this.accesories];
    },
    allProductsSorted() {
      return this.allItems().sort((a, b) => Number(b.isNew) - Number(a.isNew));
    },
    clothesSorted() {
      return this.clothes.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    },
    accesoriesSorted() {
      return this.accesories.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    },
  },
};
</script>
