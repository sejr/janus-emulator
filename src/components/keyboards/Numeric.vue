<template>
  <div class="keyboard keyboard-numeric">
    <div class="row no-gutters">

      <div class="col-8">
        <div class="row no-gutters">
          <div class="col-4" v-for="num in numset">
            <button
              v-on:click="push(num)"
              class="btn btn-block btn-scanner btn-num">
              {{ num }}
            </button>
          </div>

          <div class="col-4">
            <button
              v-on:click="push('-')"
              class="btn btn-block btn-scanner btn-num btn-num-mute">
              —
            </button>
          </div>
          <div class="col-4">
            <button
              v-on:click="push('0')"
              class="btn btn-block btn-scanner btn-num">
              0
            </button>
          </div>
          <div class="col-4">
            <button
              v-on:click="push('.')"
              class="btn btn-block btn-scanner btn-num btn-num-mute">
              .
            </button>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="row no-gutters">
          <div class="col-12">
            <button
              v-on:click="cursorMove('up')"
              id="btn-alpha-up"
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-6">
            <button
              id="btn-alpha-left"
              v-on:click="cursorMove('left')"
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-6">
            <button
              id="btn-alpha-right"
              v-on:click="cursorMove('right')"
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-12">
            <button
              id="btn-alpha-down"
              v-on:click="cursorMove('down')"
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-12">
            <button
              v-on:click="sendData()"
              class="btn btn-block btn-scanner btn-alpha directional">
              Enter
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import store from '@/store'
export default {
  name: 'numeric-keyboard',
  data () {
    return {
      numset: '789456123' // Ordered for 3-wide numpad
    }
  },
  methods: {
    push (character) {
      store.commit('append', character)
    },
    cursorMove (direction) {
      store.commit('moveCursor', direction)
    },
    sendData () {
      store.commit('sendData')
      // console.log(result)
      // Vue.http.get('http://localhost:3000/31501/display').then(response => {
      //   // console.log(response.body)
      //   // this.drawScreen(state, response.body)
      //   // store.commit('drawScreen', result)
      // }, response => {
      //   console.log(response.body)
      // })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/theme.scss';

#btn-alpha-up {
  border-top-left-radius: 50px !important;
  border-top-right-radius: 50px !important;
}

#btn-alpha-down {
  border-bottom-left-radius: 50px !important;
  border-bottom-right-radius: 50px !important;
}

.btn-num {
  color: $background;
  background: #fff;
  border-radius: 3px !important;
  &:active {
    background: lighten($primary, 50);
  }
}

.btn-num-mute {
  background: $primary;
  color: #fff;
  &:active {
    background: $primary;
    color: #fff;
  }
}

.directional {
  background: lighten($background, 10);
  &:active {
    background: $primary;
  }
}
</style>
