<template>
<div>
   <v-form v-model="valid">
    <v-row class="justify-center">
  <v-col cols="" md="5">
  <v-card text class="mt-1 mb-5 ">
      <v-row class="justify-center">
  <v-col cols="8" md="11">
 <h2>Welcome to DEV Community </h2>
  <p> <a :href="'/job/'" class="ma-1">DEV Community</a> is a community of 771,025 amazing developers </p>
    <p class="label mb-1">Name</p>
    <v-text-field outlined v-model="newregdata.name"></v-text-field>
    <p class="label mb-1 ">Email</p>
    <v-text-field outlined v-model="newregdata.email" :rules="eRules"></v-text-field>
    <p class="label mb-1">Password</p>
    <v-text-field  outlined :type="'password'" v-model="newregdata.password" :rules="pRules"></v-text-field>
    
    <v-btn @click="addRegister" id="button" aspect-ratio :disabled="!valid" >Submit</v-btn>
      </v-col></v-row>
</v-card>
</v-col></v-row> <br>
   </v-form>
</div>

</template>

<script>
import {mapState} from 'vuex'

export default {
name:"Register",
data(){
  
  return{
  
    newregdata:{
    name:"",
    email:"",
    password:"",
    },
    valid:false,
  
  }
},
computed:{
  ...mapState({
    
     eRules: (state) => state.auth.eRules,
      pRules: (state) => state.auth.pRules,
  })
},
methods:{
    // addRegister() 
    // {
      
    // this.$store.dispatch('addActionRegister', this.newregdata)
     
     
    // },
      addRegister(){

       this.$store.dispatch('registeraction', this.newregdata).then(()=>{
             alert('User data registered sucessfully')
             this.$router.push({
                  name:'Login'
              })
          }).catch(()=>{
              console.log("Some of error occur check the input values");
          })

         
      }
},

}
</script>

<style>
#button{
    background-color: rgb(74, 30, 235);
    color: white;
    width: auto;
      padding-left: 100px;
  padding-right: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
}

</style>