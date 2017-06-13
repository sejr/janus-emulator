<template>
  <div id="app">

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

body {
  font-family: 'Open Sans', sans-serif;
  background: $background !important;
}

#app {
  padding: $padding;
}

.btn-scanner {
  margin-bottom: 0px;
  outline: 0 !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  border-radius: 0px !important;

  &:active {
    outline: 0 !important;
  }
}

</style>
