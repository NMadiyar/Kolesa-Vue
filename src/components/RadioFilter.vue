<template>
  <form name="form" class="main__blockRadio">
    <div data-key="all" class="main__radio js_radio">
      <input type="radio" id="radio1" name="radio" value="1" @click="setAll">
      <label for="radio1">Все товары</label>
    </div>
    <div data-key="clothes" class="main__radio js_radio">
      <input type="radio" id="radio2" name="radio" value="2" @click="setClothes">
      <label for="radio2">Одежда</label>
    </div>
    <div data-key="accessories" class="main__radio js_radio">
      <input type="radio" id="radio3" name="radio" value="3" checked @click="setAccesories">
      <label for="radio3">Аксессуары</label>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RadioFilter',
  props: {
    clothes: Array,
    accesories: Array,
  },
  methods: {
    setClothes() {
      this.$emit('setClothes', true);
    },
    setAccesories() {
      this.$emit('setAccesories', true);
    },
    setAll() {
      this.$emit('setAll', true);
    },
  },
};
</script>
