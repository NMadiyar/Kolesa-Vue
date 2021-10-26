<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__elements">
        <div class="footer__info">
          <p class="footer__text">© Kolesa Group</p>
          <div class="footer__icons">
            <button class="footer__icons--instagram" type="button">
              <img src="@/assets/Instagram.svg" alt="instagram" height="24" width="24"></button>
            <button class="footer__icons--youtube" type="button">
              <img src="@/assets/YouTube.svg" alt="youtube" height="24" width="24"></button>
            <button  class="footer__icons--vk" type="button">
              <img src="@/assets/VK.svg" alt="VK" height="24" width="24"></button>
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
</template>

<script>
export default {
  name: 'Footer',
};
</script>
