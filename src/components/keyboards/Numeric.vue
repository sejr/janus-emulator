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
              v-on:click="push(num)"
              class="btn btn-block btn-scanner btn-alpha">
              Test
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
              class="btn btn-block btn-scanner btn-num">
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
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-6">
            <button
              v-on:click="cursorMove('left')"
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-6">
            <button
              v-on:click="cursorMove('right')"
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-12">
            <button
              v-on:click="cursorMove('down')"
              class="btn btn-block btn-scanner btn-alpha directional">
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/theme.scss';
.btn-num {
  color: $background;
  background: #fff;
  border-radius: 3px !important;
  &:active {
    background: lighten($primary, 50);
  }
}

.directional {
  background: lighten($background, 10);
  &:active {
    background: $primary;
  }
}
</style>
