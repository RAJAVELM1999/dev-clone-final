
// import Vue from "vue";
// import VueRouter from "vue-router";
// import HomeMain from "../../../components/homelogMain.vue";
// Vue.use(VueRouter);
// const routess = [
// {
//   path:"/homelogmain",
//   name:"HomeMain",
//   component: HomeMain,
// },

// const { default: router } = require("../../../router");

// const { router } = require('../../../router/index');

// ];
// const router = new VueRouter({
// routess
// });


const mutations = {
  post_GET_MUT(state, value) {
    // debugger; // eslint-disable-line no-debugger
    state.createpost = value.data.creAll

  },
  Add_POST_MUT(state, value) {
    // debugger; // eslint-disable-line no-debugger
    state.createpost.push(value)
  },
  // ==========================================

  CMNT_GET_MUT(state, value) {

    // debugger; // eslint-disable-line no-debugger
    state.commentlist = value

  },
  Add_CMNT_MUT(state, value) {
    // debugger; // eslint-disable-line no-debugger
    state.commentlist.push(value)
  },
  // ============================================
  READ_GET_MUT(state, value) {

    // debugger; // eslint-disable-line no-debugger
    state.readpostlist = value

  },
  Add_READ_MUT(state, value) {
    // debugger; // eslint-disable-line no-debugger
    state.readpostlist.push(value)
  },
  // ==========================================
  Addreg_POST_MUT(value) {
    console.log("Sucessful msg for mutation" + value);
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    // debugger; // eslint-disable-line no-debugger
    state.user = user
  },
  // Login_MUT() {
  //   // alert("the action worked")
  //   alert("Hi There Login Sucessfull msg from mutation")
  //   router.push("homelog")
  //   // router.push("HomeMain")

  // },

  Reg_GET_MUT(state, value) {
    state.regdata = value
  }
  // MUT_VAl(state, value) {
  //   state.todoList.push({ value: value })
  // },
  // NEW_MUT() {
  //   // alert("the action worked")
  //   router.push("HomeMain")

  // },
  // CRS_POST_MUT(state, value) {

  //   state.course = value
  //   // state.desserts.push({value:value})
  // },
  // CRS_GET_MUT(state, value) {

  //   // state.desserts.push({value:val})
  //   // state.desserts.push({value:levels})
  //   state.course = value

  // },

  // LEV_POST_MUT(state, value) {
  //   state.levelget = value
  //   // state.desserts.push({value:value})
  // },

  // LEV_GET_MUT(state, val) {

  //   // state.desserts.push({value:val})
  //   // state.desserts.push({value:levels})
  //   state.levelget = val

  // },
  // // subject part start here


  // SUB_POST_MUT(state, value) {
  //   state.subjectsget = value
  //   // state.desserts.push({value:value})
  // },
  // SUB_GET_MUT(state, value) {

  //   // state.desserts.push({value:val})
  //   // state.desserts.push({value:levels})
  //   state.subjectsget = value

  // },


  // // skills part start here

  // SKILLS_POST_MUT(state, value) {
  //   state.skillsget = value

  // },
  // SKILLS_GET_MUT(state, value) {

  //   state.skillsget = value

  // },




  //   VALIDATE(state) {
  //     if (state.name == state.nameVal && state.password == state.passVal) {
  //       // window.location.href = this.sucessLog;
  //       // window.location.href = "@/components/homelogMain.vue";
  //       // routes.push("HomeMain")

  //         // this.$routes['HomeMain'].nextStep()

  //       console.log("welcome")
  //       // alert("Login sucessed welcome")
  //     } 
  //     else {
  //       alert("Check The Username And Password "+ state.name);

  //     }

  //     // this.$refs.form.validate()
  //   },
  //   // CONFIRM_PASS(state){
  //   //   return () => (state.password1 === state.confirmpass) || 'Password must match'
  //   // }
};

module.exports = { mutations };
