<template>
  <div id="app">
    <div class="js_test" v-if="isShowModal">
      <div class="modal">
        <div class="modal__container">
          <div class="modal__image">
            <img src="./assets/image7.png" alt="shirt" width="330" height="330">
            <div class="modal__variations">
              <input type="radio" id="img_radio1" name="img_radio" value="1">
              <label for="img_radio1">
                <img src="./assets/photo1.png" alt="clothes1" height="50" width="50">
              </label>
              <input type="radio" id="img_radio2" name="img_radio" value="2" checked>
              <label for="img_radio2">
                <img src="./assets/photo2.png" alt="clothes2" height="50" width="50">
              </label>
              <input type="radio" id="img_radio3" name="img_radio" value="3">
              <label for="img_radio3">
                <img src="./assets/photo3.png" alt="clothes3" height="50" width="50">
              </label>
            </div>
          </div>
          <div class="modal__content">
            <h1 class="modal__title">Футболка "Эволюционируй или сдохни"</h1>
            <div class="modal__block">
              <div>
                <h2 class="modal__price">100 баллов</h2>
                <button class="modal__btn" type="button" >Заказать</button>
              </div>
              <div class="modal__balance">
                <div>
                  <p class="modal__text">Твой баланс:</p>
                  <p class='modal__pts'>50 баллов</p>
                </div>
                <div class="modal__bags">
                  <img src="./assets/bags.png" alt="bags" width="40" height="41">
                </div>
              </div>
            </div>
            <p class="modal--info__text">Цвета:</p>
            <div class="modal--info__blockRadio">
              <div class="modal--info__radio">
                <input id="color_radio1" name="radio"  type="radio" value="1" checked >
                <label  for="color_radio1">
                  <img src="./assets/blue.svg" alt="blue" height="24" width="23">
                  Синий
                </label>
              </div>
              <div class="modal--info__radio">
                <input id="color_radio2" name="radio"  value="2" type="radio" >
                <label  for="color_radio2">
                  <img src="./assets/whitish.svg" alt="whitish" width="23" height="24">
                  Бежевый
                </label>
              </div>
              <div class="modal--info__radio">
                <input id="color_radio3" name="radio"  value="3" type="radio" >
                <label  for="color_radio3">
                  <img src="./assets/gray.svg" alt="gray" height="24" width="23">
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
              <p>Разные детали про футболку и данный товар</p>
            </div>
            <div class="modal--info__howTo">
              <h2>Как выбрать размер:</h2>
              <p>Написать дяде Рику для уточнения.</p>
            </div>
          </div>
          <button class="modal__btn--close" type="button"
          @click="closeModal">
            <img src="./assets/close-big.svg" width="32" height="32" alt="close">
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <header class="header">
        <div class="header__block">
          <div>
            <img src="./assets/KolesaGroup.png"  height="35" width="215" alt="Kolesa logo">
          </div>
          <div class="header__search">
            <label for="search"><div class="header__search__img" type="button" >
              <img src="./assets/search-big.svg" alt="search" height="24" width="24"></div></label>
            <input name="search" id="search" class="header__search__input"
                   type="search" placeholder="Поиск">
          </div>
        </div>
        <button class="header__info">
          <div>
            <img class="header__avatar" src="./assets/MaskGroup.png"
                 alt="avatar" width="44" height="44">
          </div>
          <div>
            <div class="header__name">Мортиджан</div>
            <div class="header__pts">300 баллов</div>
          </div>
        </button>
      </header>
    </div>
    <div class="container">
      <main class="main">
        <nav class="nav">
          <div class="nav__block">
            <a class="nav__link" href="#">Оргсхема</a>
            <a class="nav__link" href="#">Kolesa <span class="nav__link--bold">Team</span></a>
            <a class="nav__link nav__link--bold" href="#">
              <img class="nav__link--active" src="./assets/Rectangle3.svg"
                   alt="active" width="4" height="36">
              Kolesa Shop</a>
            <a class="nav__link" href="#">Картина компании</a>
            <a class="nav__link" href="#">Новости</a>
            <a class="nav__link" href="#">Education</a>
            <a class="nav__link" href="#">Guidelines</a>
            <a class="nav__link" href="#">Библиотека</a>
            <a class="nav__link" href="#">FAQ</a>
          </div>
        </nav>
        <div class="main__content">
          <img class="main__banner" src="./assets/image.jpg"
               alt="banner" width="1038" height="335">
          <div class="main__buttons">
            <button type="button" class="main__btn main__btn--get">
              <img class="main__btn--image" src="./assets/plus.svg" alt="plus"
                   height="41" width="40">Получить баллы
            </button>
            <button type="button" class="main__btn main__btn--question">
              <img class="main__btn--image" src="./assets/question.png" alt="question"
                   width="40" height="41">Как получить баллы?</button>
            <button type="button" class="main__btn main__btn--gift">
              <img class="main__btn--image" src="./assets/gift.png" alt="gift"
                   height="41" width="40">Подарить баллы</button>
          </div>
          <form name="form" class="main__blockRadio">
            <div data-key="all" class="main__radio js_radio">
              <input type="radio" id="radio1" name="radio" value="1" checked>
              <label @click="allOnly" for="radio1">Все товары</label>
            </div>
            <div data-key="clothes" class="main__radio js_radio" @change="clothesProduct">
              <input type="radio" id="radio2" name="radio" value="2">
              <label @click="clothOnly" for="radio2">Одежда</label>
            </div>
            <div data-key="accesories" class="main__radio js_radio">
              <input type="radio" id="radio3" name="radio" value="3">
              <label @click="accOnly" for="radio3">Аксессуары</label>
            </div>
          </form>
          <div class="main--clothes js_clothes">
                        <div class="main--clothes__element"
                             v-for="item in [...arrayBadge, ...arrayNoBadge]" :key="item.id">
                          <img :src='require(`${item.img}`)'
                               alt="clothes" width="330" height="330"/>
                            <div class="main--clothes__textBlock">
                                <p class="main--clothes__new" v-if="item.badge">
                                    NEW
                                </p>
                                <p class="main--clothes__pts">{{item.price}} баллов</p>
                                <p class="main--clothes__text">{{item.title}}</p>
                                <p class="main--clothes__size">Размеры S/M/L </p>
                                <button type="button" class="main--clothes__btn"
                                @click="openModal">Заказать</button>
                            </div>
                        </div>
          </div>
        </div>
      </main>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="footer__elements">
          <div class="footer__info">
            <p class="footer__text">© Kolesa Group</p>
            <div class="footer__icons">
              <button class="footer__icons--instagram" type="button">
                <img src="./assets/Instagram.svg" alt="instagram" height="24" width="24"></button>
              <button class="footer__icons--youtube" type="button">
                <img src="./assets/YouTube.svg" alt="youtube" height="24" width="24"></button>
              <button  class="footer__icons--vk" type="button">
                <img src="./assets/VK.svg" alt="VK" height="24" width="24"></button>
            </div>
          </div>
          <div class="footer__block">
            <div class="footer__block__text">
              <p>Есть идеи что улучшить?<p>Не знаешь, с кем решить проблему?</p>
            </div>
            <div>
              <button class="footer__btn">Написать</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      clothes: [
        {
          id: 0,
          title: 'Футболка',
          price: 220,
          badge: true,
          img: './assets/image4.png',
          details: 'Топовая футболочка c разным видом описаний',
        },
        {
          id: 1,
          title: 'Бомбер',
          price: 230,
          badge: true,
          img: './assets/pics2.jpg',
          details: 'Топовый бомбер',
        },
        {
          id: 2,
          title: 'Пуловер',
          price: 300,
          badge: false,
          img: './assets/pics3.jpg',
          details: 'Топовый пуловер',
        },
        {
          id: 3,
          title: 'Штаны',
          price: 280,
          badge: false,
          img: './assets/pics3.jpg',
          details: 'Топовые штаны',
        },
        {
          id: 4,
          title: 'Шорты',
          price: 280,
          badge: false,
          img: './assets/pics4.jpg',
          details: 'Топовые шорты',
        },
        {
          id: 5,
          title: 'Юбка',
          price: 280,
          badge: false,
          img: './assets/pics4.jpg',
          details: 'Топовая юбка',
        },
        {
          id: 6,
          title: 'Классная футболка',
          price: 200,
          badge: false,
          img: './assets/pics330.jpeg',
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
      clothOnly: false,
      allOnly: true,
      accOnly: false,
    };
  },
  computed: {
    bigArray() {
      return [...this.clothes, ...this.accesories];
    },
    arrayBadge() {
      return this.bigArray.filter((item) => item.badge);
    },
    arrayNoBadge() {
      return this.bigArray.filter((item) => !item.badge);
    },
  },
  methods: {
    clothesProduct() {
      return this.clothes;
    },
    accesProduct() {
      return this.accesories;
    },
    openModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="scss">
@import "src/styles/main";
</style>
