<template>
  <div class="howToPts">
    <div class="howToPts__content">
      <router-link to="/shop" class="howToPts__link">Kolesa Shop /</router-link>
      <router-link to="/shop/how-to-get-points" class="howToPts__link">
        Как получить баллы
      </router-link>
      <h2 class="howToPts__title">Как получить баллы</h2>
      <div class="howToPts__element">
      <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference2.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Выступления на конференциях</h3>
        <p class="howToPts__cost">90 баллов</p>
        <p class="howToPts__text">Стань спикером на международной конференции по
          своему направлению</p>
        <button class="modal__btn modal__btn--howToPts"
        style="margin-top: 68px">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference1.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Выступление на meetup</h3>
        <p class="howToPts__cost">60 баллов</p>
        <p class="howToPts__text">Стань спикером в Колёсах и на meetup других компаний.
          Расскажи о наших продуктах и технологиях которые мы используем</p>
        <button class="modal__btn modal__btn--howToPts"
                style="margin-top: 20px">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference3.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Статья на habr/vc.ru/rusbase</h3>
        <p class="howToPts__cost">90 баллов</p>
        <p class="howToPts__text">Подготовь качественный контент, напиши и опубликуй
          статью на профильную тему</p>
        <button class="modal__btn modal__btn--howToPts"
                style="margin-top: 44px">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference4.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Мастер-классы, тренинги, лекции, подкасты, прямые эфиры</h3>
        <p class="howToPts__cost">60 баллов</p>
        <p class="howToPts__text">Поделись профессиональными знаниями с коллегами.
          Важно обучить не менее 6 человек</p>
        <button class="modal__btn modal__btn--howToPts">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference5.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Организация мероприятия</h3>
        <p class="howToPts__cost">60 баллов</p>
        <p class="howToPts__text">Организуй турнир по командным играм в офисе.
          ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире</p>
        <button class="modal__btn modal__btn--howToPts">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference6.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Стань ментором в проекте «Kolesa Academy»</h3>
        <p class="howToPts__cost">90 баллов</p>
        <p class="howToPts__text">Стань ментором академиков, поделись своими
          знаниями и помоги ребятам завершить Kolesa Academy успешно</p>
        <button class="modal__btn modal__btn--howToPts">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference7.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Помощь HR team</h3>
        <p class="howToPts__cost">50 баллов</p>
        <p class="howToPts__text">Помоги организовать мероприятие</p>
        <button class="modal__btn modal__btn--howToPts"
                style="margin-top: 92px">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference1.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Выступление на Demoday</h3>
        <p class="howToPts__cost">30 баллов</p>
        <p class="howToPts__text">Выступи на Demoday внутри своей команды и поделись знаниями</p>
        <button class="modal__btn modal__btn--howToPts"
                style="margin-top: 68px">Отправить заявку</button>
      </div>
        <div class="howToPts__blocks">
        <img class="howToPts__image" src="@/assets/conference8.svg"
             alt="conference" width="48" height="48">
        <h3 class="howToPts__subtitle">Другое</h3>
        <p class="howToPts__text">Получай баллы если уже что-то сделано</p>
        <button class="modal__btn modal__btn--howToPts"
                style="margin-top: 120px">Отправить заявку</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
