<template>
  <form name="form" class="main__blockRadio">
    <div data-key="all" class="main__radio js_radio">
      <input type="radio" id="radio1" name="radio" value='1' checked
             @change="radioAll"
      v-model="myChoice">
      <label for="radio1">Все товары</label>
    </div>
    <div data-key="clothes" class="main__radio js_radio">
      <input type="radio" id="radio2" name="radio" value='2'
             @change="radioClothes"
             v-model="myChoice">
      <label for="radio2">Одежда</label>
    </div>
    <div data-key="accessories" class="main__radio js_radio">
      <input type="radio" id="radio3" name="radio" value='3'
             @change="radioAccesories"
             v-model="myChoice">
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
  data() {
    return {
      myChoice: '1',
    };
  },
  methods: {
    radioClothes() {
      this.$emit('radioClothes', this.myChoice);
    },
    radioAccesories() {
      this.$emit('radioAccesories', this.myChoice);
    },
    radioAll() {
      this.$emit('radioAll', this.myChoice);
    },
  },
};
</script>
