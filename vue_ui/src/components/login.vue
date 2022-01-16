<template>
  <div>
  <v-form v-model="valid">

  
       <v-row class="justify-center" >
<v-col cols="" md="5" mb="5">
      <v-card text class="mt-0"
  elevation="2">
   <v-row class="justify-center">
  <v-col cols="8" md="11">
  <h2>Welcome to DEV Community </h2>
  <p> <a :href="'/job/'">DEV Community</a> is a community of 771,025 amazing developers </p>


  <p class="label mb-1">Email</p>
  <v-text-field  outlined v-model="logindata.email"  :rules="eRules"></v-text-field>
    <p class="label mb-1">Password</p>
    <v-text-field  outlined :type="'password'" v-model="logindata.password" :rules="pRules"></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :label="`Remember Me`"
    ></v-checkbox>
    
  <v-btn @click="validateMethods"  :disabled="!valid"  id="button">Continue</v-btn>
   <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >  {{ text }}
     </v-snackbar>
  <p class="forgot">I forgot my Password</p>
  
  </v-col></v-row>
</v-card>
</v-col></v-row>
<br>
</v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
name: "Login",
data(){
  return{
    snackbar: false,
    text: 'Logined Sucessfully.',
    timeout: 2000,
    valid:true,
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
     eRules: (state) => state.auth.eRules,
      pRules: (state) => state.auth.pRules,
  })
},
created() {
      // this.initialize()
      
    // this.getActionRegister()
    // this.myActionvalidate()
   
    },

methods:{

    
       ...mapActions(['LoginAction']),

      validateMethods(){
          this.LoginAction(this.logindata).then(()=>{
              alert('Login Sucess')
              this.$router.push({
                  name:'homelog'
              })
          }).catch(()=>{
            alert('Check The Username And Password')
              console.log("Check The Username And Password");
          })

          

         
      },
  
  // validateMethods(){
    
  //   this.$store.dispatch('myActionvalidate',this.logindata)
  // },
  

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