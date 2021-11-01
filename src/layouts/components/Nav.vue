<template>
  <nav class="nav">
    <div class="nav__block">
      <router-link exact class="nav__link" to='/scheme'
                   active-class='nav__link--active'>Оргсхема
      </router-link>
      <router-link exact class="nav__link" to="/team"
                   active-class='nav__link--active'>Kolesa
        <span class="nav__link--bold">Team</span>
      </router-link>
      <router-link :exact="isExact" class="nav__link nav__link--bold" to="/shop"
                   active-class='nav__link--active'>Kolesa Shop
      </router-link>
      <router-link exact class="nav__link" to="/picture"
                   active-class='nav__link--active'>Картина компании
      </router-link>
      <router-link exact class="nav__link" to="/news"
                   active-class='nav__link--active'>Новости
      </router-link>
      <router-link exact class="nav__link" to="/education"
                   active-class='nav__link--active'>Education
      </router-link>
      <router-link exact class="nav__link" to="/guidelines"
                   active-class='nav__link--active'>Guidelines
      </router-link>
      <router-link exact class="nav__link" to="/library"
                   active-class='nav__link--active'>Библиотека
      </router-link>
      <router-link exact class="nav__link" to="/faq"
                   active-class='nav__link--active'>FAQ
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isExact: false,
    };
  },
};
</script>
