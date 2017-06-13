<template>
  <div class="display">
    <div
      class="row"
      v-for="(row, rowIndex) in display">

      <div
        class="col-char"
        v-for="(char, colIndex) in row"
        v-bind:class="(colIndex === cursor.x && rowIndex === cursor.y) ? 'cursor' : ''">
        {{ char }}
      </div> <!-- .col-char -->

    </div> <!-- .row -->
  </div> <!-- .display -->
</template>

<script>
import store from '@/store'

// Simply for testing the exposed APIs
const testScreen = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
const testConfig = {
  up: false,
  left: false,
  right: true,
  down: true
}

export default {
  name: 'display',
  created () {
    store.commit('drawScreen', testScreen)
    store.commit('setDirections', testConfig)
  },
  computed: {
    display () {
      return store.state.display
    },
    cursor () {
      return store.state.cursor
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/theme.scss';
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

.display {
  color: #fff;
  padding: 15px;
  height: 256px;
  font-size: 18px;
  font-weight: bold;
  line-height: 14px;
  border-radius: 3px;
  margin-bottom: 15px;
  background: rgba(0,0,0,.9);
  word-wrap: break-word !important;
  font-family: 'Inconsolata', monospace;
}

.cursor {
  -webkit-animation: CURSOR_BLINK 1s infinite; /* Safari 4+ */
  -moz-animation:    CURSOR_BLINK 1s infinite; /* Fx 5+ */
  -o-animation:      CURSOR_BLINK 1s infinite; /* Opera 12+ */
  animation:         CURSOR_BLINK 1s infinite; /* IE 10+, Fx 29+ */
}

@-webkit-keyframes CURSOR_BLINK {
  0%, 49% {
      background: rgba(255,255,255,.75);
  }
  50%, 100% {
      background: none;
  }
}
.col-char {
  width: 5%;
  text-align: center;
}
</style>
