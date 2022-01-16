

const getters = {
  // authenticated(state) {

  //   return state.token
  //   // return state.token && state.user
  // },
  authenticated(state) {
    // debugger; // eslint-disable-line no-debugger
    return state.token
    // return state.token && state.user
  },
  user(state) {
    return state.user
  },
  defaultpost(state) {
    if ((state.createpost).length <= 0) {
      state.defaultval = "Not Have A Post Yet"

    } else {
      state.defaultval = null
    }
  },

};

module.exports = { getters };
