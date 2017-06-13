<template>
  <div class="keyboard keyboard-alpha">

    <div class="row no-gutters">
      <div class="col-functions" v-for="fn in functions">
        <button
          v-on:click=""
          class="btn btn-block btn-scanner btn-alpha btn-fn">
          F{{ fn }}
        </button>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-2" v-for="character in charset">
        <button
          v-on:click="push(character)"
          class="btn btn-block btn-scanner btn-alpha">
          {{ character }}
        </button>
      </div>

      <div class="col-4">
        <button id="spacebar"
          v-on:click="push('\xa0')"
          class="btn btn-block btn-scanner btn-alpha">
          Space</button></div>
      <div class="col-2">
        <button id="backspace"
          v-on:click="toggleCaps()"
          v-bind:class="caps ? 'active' : ''"
          class="btn btn-block btn-scanner btn-alpha">
          Aa</button></div>
      <div class="col-2">
        <button id="backspace"
          v-on:click="backspace()"
          class="btn btn-block btn-scanner btn-alpha">
          ⌫</button></div>
      <!-- <div class="col-2">
        <button id="return"
          v-on:click=""
          class="btn btn-block btn-scanner btn-alpha">
          ⏎</button></div> -->
    </div> <!-- .row .no-gutters -->
  </div> <!-- .keyboard .keyboard-alpha -->
</template>

<script>
import store from '@/store'
export default {
  name: 'alpha-keyboard',
  data () {
    return {
      functions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      caps: true
    }
  },
  methods: {
    push (character) {
      store.commit('append', character)
    },
    backspace () {
      store.commit('backspace')
    },
    toggleCaps () {
      if (this.caps) {
        this.charset = this.charset.toLowerCase()
        this.caps = false
      } else {
        this.charset = this.charset.toUpperCase()
        this.caps = true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/theme.scss';
.btn-alpha {
  color: #fff;
  background: lighten($background, 3);
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  border-radius: 3px !important;
  &:active {
    background: $primary;
  }
}

.row {
  margin-left: -5px !important;
  margin-right: -5px !important;
}

.col-1, .col-2, .col-4, .col-6, .col-8, .col-12 {
  padding: 5px !important;
}

.active{
  background: lighten($primary, 10);
  color: #fff;
}

#spacebar {
  background: lighten($background, 10);
  &:active {
    background: $primary;
  }
}

.col-functions {
  width: 10%;
  padding: 5px !important;
  font-size: 16px !important;

  .btn-fn {
    background: darken($background, 5);
    color: white;
    font-size: 12px !important;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
