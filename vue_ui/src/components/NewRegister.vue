<template>
<div>
    <v-row class="justify-center">
  <v-col cols="" md="5">
  <v-card flat  class="mt-0">
      <v-row class="justify-center">
  <v-col cols="8" md="11">
 <h2>Welcome to DEV Community </h2>
  <p> <a :href="'/job/'">DEV Community</a> is a community of 771,025 amazing developers </p>
    <p class="label">Name</p>
    <v-text-field outlined v-model="newregdata.name"></v-text-field>
    <p class="label">Email</p>
    <v-text-field outlined v-model="newregdata.email"></v-text-field>
    <p class="label">Password</p>
    <v-text-field  outlined :type="'password'" v-model="newregdata.password"></v-text-field>
    
    <v-btn @click="addRegister" id="button" aspect-ratio>Submit</v-btn>
      </v-col></v-row>
</v-card>
</v-col></v-row> <br>
</div>

</template>

<script>

export default {
name:"Register",
data(){
  return{
    newregdata:{
    name:"",
    email:"",
    password:"",
    },
  
  }
},

methods:{
    addRegister() 
    {
      
    this.$store.dispatch('addActionRegister', this.newregdata)
     
     
    },
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