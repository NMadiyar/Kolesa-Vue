<template>
  <div class="main--clothes js_clothes">
    <div class="main--clothes__element"
         v-for="item in clothes" :key="item.id">
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
    onlyCloth: Boolean,
    onlyAccesories: Boolean,
  },
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.clothes = response.data;
        this.$emit('clothesData', this.clothes);
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((res) => {
        this.accesories = res.data;
        this.$emit('accesoriesData', this.accesories);
      });
  },
  data() {
    return {
      clothes: [
        {
          id: 0,
          title: 'Футболка',
          price: 220,
          badge: true,
          img: '@/assets/image4.png',
          details: 'Топовая футболочка c разным видом описаний',
        },
        {
          id: 1,
          title: 'Бомбер',
          price: 230,
          badge: true,
          img: '@/assets/pics2.jpg',
          details: 'Топовый бомбер',
        },
        {
          id: 2,
          title: 'Пуловер',
          price: 300,
          badge: false,
          img: '@/assets/pics3.jpg',
          details: 'Топовый пуловер',
        },
        {
          id: 3,
          title: 'Штаны',
          price: 280,
          badge: false,
          img: '@/assets/pics3.jpg',
          details: 'Топовые штаны',
        },
        {
          id: 4,
          title: 'Шорты',
          price: 280,
          badge: false,
          img: '@/assets/pics4.jpg',
          details: 'Топовые шорты',
        },
        {
          id: 5,
          title: 'Юбка',
          price: 280,
          badge: false,
          img: '@/assets/pics4.jpg',
          details: 'Топовая юбка',
        },
        {
          id: 6,
          title: 'Классная футболка',
          price: 200,
          badge: false,
          img: '@/assets/pics330.jpeg',
          details: 'Топовая футболочка с котиком',
        },
      ],
      accesories: [
        {
          id: 7,
          title: 'Классная кружка',
          price: 100,
          badge: true,
          img: './assets/pics5.jpg',
          details: 'Топовая кружка',
        },
        {
          id: 8,
          title: 'Зарядное устройство',
          price: 150,
          badge: true,
          img: './assets/pics6.jpg',
          details: 'Зарядное устройство на все случаи жизни',
        },
        {
          id: 9,
          title: 'Powerbank',
          price: 90,
          badge: false,
          img: './assets/pics7.jpg',
          details: 'Заряжает быстро и качественно',
        },
        {
          id: 10,
          title: 'Флешка',
          price: 50,
          badge: false,
          img: './assets/pics9.svg',
          details: 'Флешка на 32гб',
        },
        {
          id: 11,
          title: 'Блокнот',
          price: 30,
          badge: false,
          img: './assets/pics10.png',
          details: 'Блокноты с разными картинками',
        },
        {
          id: 12,
          title: 'Блокнот',
          price: 40,
          badge: false,
          img: './assets/pics10.png',
          details: 'Блокноты с разными картинками',
        },
        {
          id: 13,
          title: 'Флешка',
          price: 75,
          badge: false,
          img: './assets/pics9.svg',
          details: 'Флешка на 16гб',
        },
        {
          id: 14,
          title: 'Powerbank',
          price: 120,
          badge: false,
          img: './assets/pics7.jpg',
          details: 'Пауэрбэнк на 10000MpA',
        },
      ],
      isShowModal: false,
      modalData: {},
    };
  },
  computed: {
    bigArray() {
      return [...this.clothes, ...this.accesories];
    },
    arrayBadge() {
      return this.bigArray.filter((item) => item.isNew);
    },
    arrayNoBadge() {
      return this.bigArray.filter((item) => !item.isNew);
    },
    allProductsSorted() {
      return [...this.arrayBadge, ...this.arrayNoBadge];
    },
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
  },
};
</script>
