import Vue from 'vue'
import Vuex from 'vuex'
const assert = require('assert')
Vue.use(Vuex)

/**
 * This is a private API that facilitates the actual mutation of the cursor
 * position.
 * @param  {number} newX          The new x-coordinate of the cursor.
 * @param  {number} newY          The new y-coordinate of the cursor.
 * @return {none}                 The cursor state is directly modified.
 */
const _moveCursor = function (state, newX, newY) {
  try {
    let xIsValid = newX >= 0 && newX <= 19
    let yIsValid = newY >= 0 && newY <= 15
    assert(xIsValid && yIsValid, 'Invalid cursor position.')
    state.cursor.x = newX
    state.cursor.y = newY
  } catch (err) {
    console.log(err.message)
  }
}

/**
 * Establishes a permission system that allows developers to permit or deny the
 * use of the 4-directional pad. This is used primarily for prompting the user.
 * @param  {object} state            Our Vuex state object.
 * @param  {boolean} up               True => up button may be pressed.
 * @param  {boolean} left             True => left button may be pressed.
 * @param  {boolean} right            True => right button may be pressed.
 * @param  {boolean} down             True => down button may be pressed.
 * @return {none}                     The permissions for the directional pad
 *                                    are updated.
 */
const _setDirections = function (state, directionConfig) {
  try {
    state.directionEnabled.up = directionConfig.up
    state.directionEnabled.left = directionConfig.left
    state.directionEnabled.right = directionConfig.right
    state.directionEnabled.down = directionConfig.down
  } catch (err) {
    console.log(err)
  }
}

export default new Vuex.Store({
  state: {
    cursor: { x: 0, y: 0 },
    directionEnabled: {
      up: true,
      left: true,
      right: true,
      down: true
    },
    display: [
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'],
      ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0',
        '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0']
    ]
  },
  mutations: {
    /**
     * Appends character to the display matrix and updates the cursor position
     * accordingly.
     * @param  {object}    state      Our Vuex state object.
     * @param  {character} newChar    New character to be added.
     * @return {none}                 The display matrix is updated.
     */
    append (state, newChar) {
      try {
        // Making sure we haven't hit the end of the display.
        let endReached =
          (state.cursor.y === 15 && state.cursor.x <= 19) ||
          (state.cursor.y < 15)
        assert(endReached, 'End of display.')

        // NOTE: https://vuejs.org/v2/guide/list.html#Caveats
        Vue.set(state.display[state.cursor.y], state.cursor.x, newChar)

        console.info(
          'New char appended at (' +
          state.cursor.y + ',',
          state.cursor.x + '):',
          state.display[state.cursor.y][state.cursor.x]
        )

        // Update the cursor position.
        if (state.cursor.x === 19) {
          _moveCursor(state, 0, state.cursor.y += 1)
        } else {
          _moveCursor(state, state.cursor.x += 1, state.cursor.y)
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    /**
     * Removes the last character from the display matrix and updates the
     * cursor position accordingly.
     * @param  {object} state         Our Vuex state object.
     * @return {none}                 The display matrix is updated.
     */
    backspace (state) {
      try {
        let startReached =
          (state.cursor.y === 0 && state.cursor.x > 0) ||
          (state.cursor.y > 0)

        // Testing to see if we can backspace any further.
        assert(startReached, "Can't go back any further.")

        // If so, move the cursor back one spot.
        if (state.cursor.x === 0) {
          _moveCursor(state, 19, state.cursor.y -= 1)
        } else {
          _moveCursor(state, state.cursor.x -= 1, state.cursor.y)
        }

        // Then delete the character at that position.
        // NOTE: https://vuejs.org/v2/guide/list.html#Caveats
        Vue.set(state.display[state.cursor.y], state.cursor.x, '\xa0')
      } catch (err) {
        console.log(err.message)
      }
    },
    /**
     * This serves as an interface for the directional pad in the Numerical
     * keyboard. The direction is fetched and validated against the current
     * cursor position; the position of the cursor is then updated.
     * @param  {object} state         Our Vuex state object.
     * @param  {string} direction     Text corresponding to input direction.
     * @return {none}                 The cursor state is updated.
     */
    moveCursor (state, direction) {
      switch (direction) {
        case 'up':
          try {
            // Validate and move the cursor up
            assert((state.cursor.y > 0) && state.directionEnabled.up,
              'Invalid cursor movement.')
            _moveCursor(state, state.cursor.x, state.cursor.y -= 1)
          } catch (err) {
            console.log(err.message)
          }
          break
        case 'left':
          try {
            // Validate and move the cursor to the left
            assert((state.cursor.x > 0) && state.directionEnabled.left,
              'Invalid cursor movement.')
            _moveCursor(state, state.cursor.x -= 1, state.cursor.y)
          } catch (err) {
            console.log(err.message)
          }
          break
        case 'right':
          try {
            // Validate and move the cursor to the right
            assert((state.cursor.x < 19) && state.directionEnabled.right,
              'Invalid cursor movement.')
            _moveCursor(state, state.cursor.x += 1, state.cursor.y)
          } catch (err) {
            console.log(err.message)
          }
          break
        case 'down':
          try {
            // Validate and move the cursor down
            assert((state.cursor.y < 15) && state.directionEnabled.down,
              'Invalid cursor movement.')
            _moveCursor(state, state.cursor.x, state.cursor.y += 1)
          } catch (err) {
            console.log(err.message)
          }
          break
        default:
          throw new Error('Invalid cursor direction.')
      }
    },
    /**
     * Takes a two-dimensional array of characters and maps them to the 16x20
     * display of the scanner application.
     * @param  {[[characters]]} matrix  The characters to be mapped.
     * @return {none}                   The display is updated.
     */
    drawScreen (state, matrix) {
      for (var row in matrix) {
        for (var col in matrix) {
          Vue.set(state.display[row], col, matrix[row][col])
        }
      }
    },
    setDirections: _setDirections
  }
})
