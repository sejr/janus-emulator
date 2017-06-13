<template>
  <div class="scanner">

    <!-- 16x20 character grid -->

    <div class="display">
      {{ displayText }}
    </div>
    <div class="container-fluid">



    </div> <!-- .container-fluid -->
  </div> <!-- .scanner -->
</template>

<script>
export default {
  name: 'scanner',
  data () {
    return {
      displayText: '',
      shift: false
    }
  },
  methods: {
    append: function (char, main) {
      if (this.shift) {
        this.displayText = this.displayText + char
      } else {
        this.displayText = this.displayText + main
      }
    },
    backspace: function () {
      // console.log('back')
      this.displayText = this.displayText.substring(0, this.displayText.length - 1)
    }
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Inconsolata');
body {
  padding-right: 15px !important;
}

.btn-scanner {
  height: 50px !important;
  width: 100%;
  background: #fff;
  // border: 2px solid #aaa !important;
  box-shadow: 0px 2px 4px rgba(0,0,0,.3);
  border-radius: 5px !important;
  color: #444;
  font-weight: 900 !important;
  font-size: 24px !important;
  outline: 0 !important;

  .alt {
    opacity: 0.5;
    position: absolute;
    left: 25px;
    top: 7px;
    font-size: 16px;
    font-weight: 700;
  }

  &:active {
    // border: 2px solid #ccc !important;
    background: #ccc;
    position: relative;
    top: 2px;
    box-shadow: none;
    outline: 0 !important;

    .alt {
      position: absolute;
      left: 8px;
      top: 5px;
    }
  }
}

.col {
  padding-left: 15px !important;
  padding-right: 0px !important;
}

.btn-letter {
  height: 50px;
  background: #26a028;
  color: #fff;
  text-shadow: 0px 1px 0px rgba(0,0,0,.5);

  &:active {
    background: #1b891d;
  }
}

.display {
  font-family: 'Inconsolata', monospace;
  background: rgba(0,0,0,.9);
  border-radius: 5px;
  height: 200px;
  color: #fff;
  padding: 20px;
  margin-top: 15px;
  margin-left: 15px;
  font-size: 16px;
  word-wrap: break-word !important;
}

.btn-col {
  text-align: center !important;
}

.btn-row {
  margin-top: 15px;
}
</style>
