<template>
  <div class="display">
    <div
      class="row"
      v-for="(row, rowIndex) in display">

      <div
        class="col-char"
        v-for="(char, colIndex) in row"
        v-bind:class="
          (cursorEnabled && (colIndex === cursor.x && rowIndex === cursor.y))
            ? 'cursor' /* Provides the appropriate highlighting */
            : '' /* No change to matrix location otherwise. */ ">

        {{ char }}
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '@/store'

const testConfig = {
  up: false,
  left: false,
  right: true,
  down: true
}

/**
 * Facilitates the required API call in order to close the connection to the
 * JTS TCP server.
 * @return {none} Computer instance is destroyed.
 */
window.onbeforeunload = function () {
  Vue.http.get('http://localhost:3000/31501/destroy').then(response => {
    console.log(response.body)
  }, response => {
    console.log(response.body)
  })
}

export default {
  name: 'display',
  /**
   * Before the display component is added to the DOM, we have to initialize
   * the system and fetch the initial display data from the JTS TCP server.
   * TODO: Wrap this and other API interactions inside their own set of Vuex
   * mutations.
   * @return {none} The display is updated with data from the JTS server.
   */
  beforeCreate () {
    Vue.http.get('http://localhost:3000/31501/init').then(response => {
      Vue.http.get('http://localhost:3000/31501/display').then(response => {
        // console.log(response.body)
        store.commit('drawScreen', response.body)
        store.commit('setDirections', testConfig)
      }, response => {
        console.log(response.body)
      })
    }, response => {
      console.log(response.body)
    })
  },
  computed: {
    display () {
      return store.state.display
    },
    cursorEnabled () {
      return store.state.cursorEnabled
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
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:500');

.display {
  color: #fff;
  padding: 15px;
  height: 300px;
  font-size: 20px;
  font-weight: 500;
  line-height: 17px;
  border-radius: 3px;
  margin-bottom: 15px;
  background: rgba(0,0,0,.9);
  word-wrap: break-word !important;
  font-family: 'Fira Mono', monospace;
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
