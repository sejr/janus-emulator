<template>
  <div id="app">
    <div style="text-align: center; padding-bottom: 15px">
      <span class="brand">Jackson Tube Service</span>
    </div>

    <display></display>

    <div class="keyboards">
      <alpha-keyboard></alpha-keyboard>
      <numeric-keyboard></numeric-keyboard>
    </div>

  </div> <!-- .app -->
</template>

<script>
import Display from '@/components/Display'
import AlphaKeyboard from '@/components/keyboards/Alpha'
import NumericKeyboard from '@/components/keyboards/Numeric'

export default {
  name: 'app',
  components: {
    Display,
    AlphaKeyboard,
    NumericKeyboard
  }
}
</script>

<style lang="scss">
@import './assets/css/theme';
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Righteous');

body {
  font-family: 'Open Sans', sans-serif;
  background: $background !important;
}

.brand {
  color: darken($primary, 5);
  text-shadow: 0px -1px 0px rgba(0,0,0,1);
  font-family: 'Righteous', cursive;
  text-transform: uppercase;
  letter-spacing: 5px;
}

#app {
  padding: $padding;
}

.btn-scanner {
  margin-bottom: 0px;
  outline: 0 !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  height: 30px !important;
  padding-top: 5px !important;

  &:active {
    outline: 0 !important;
  }
}

</style>
