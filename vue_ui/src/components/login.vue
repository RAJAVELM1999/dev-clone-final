<template>
  <div>
    {{regdata}}
       <v-row class="justify-center" >
<v-col cols="" md="5">
      <v-card text class="mt-0"
  elevation="2">
   <v-row class="justify-center">
  <v-col cols="8" md="11">
  <h2>Welcome to DEV Community </h2>
  <p> <a :href="'/job/'">DEV Community</a> is a community of 771,025 amazing developers </p>


  <p class="label">Email</p>
  <v-text-field  outlined v-model="logindata.email"></v-text-field>
    <p class="label">Password<p>
  <v-text-field :type="'password'" outlined v-model="logindata.password"></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :label="`Remember Me`"
    ></v-checkbox>
    
  <v-btn @click="validateMethods" id="button">Continue</v-btn>
  
  <p class="forgot">I forgot my Password</p>
  
  </v-col></v-row>
</v-card>
</v-col></v-row>
<br>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
name: "Login",
data(){
  return{
    checkbox:"",
    logindata:{
      email:"",
      password:""
    },
  }
},
computed:{
  ...mapState({
     regdata: (state) => state.auth.regdata,
  })
},
created() {
      // this.initialize()
      
    this.getActionRegister()
    // this.myActionvalidate()
   
    },

methods:{
  
  validateMethods(){
    
    this.$store.dispatch('myActionvalidate',this.logindata)
  },
  ...mapActions(['getActionRegister','myActionvalidate'])

},

}
</script>

<style>
.label{
    text-align: left;
    font-weight: bold;
}
.forgot{
    color: indigo;
    font-weight: 200;
    }
#cnt{
    background-color: rgb(74, 30, 235); /* Green */
  border: none;
  color: white;
  padding: 2px 70px;
  
  text-align: center;
  align-items: justify;
   
  display: inline-block;
  font-size: 16px;
  width: 465px;
  height: 50px;
}

</style>