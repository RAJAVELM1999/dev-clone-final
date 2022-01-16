<template>
  <div>
      <!-- App.vue -->

<v-app>
    

  <v-app-bar app class="grey lighten-5" permanent  elevation="2">
       <router-link to="/" >
      <v-btn dark color="black" class="ma-4" id="dev" >DEV</v-btn> </router-link>
         
         <v-text-field dense append-icon="mdi-magnify"  outlined class="ma-9 mt-16 ml-2 shrink " color="indigo accent-2" placeholder="search...">
             
         </v-text-field>
    <v-spacer></v-spacer>
  <router-link to="/Login" >
    <v-btn class="ma-2" icon id="btn1"
      
     
    >Log in</v-btn> </router-link>
    
     <router-link to="/Register" >
     <v-btn 
     id="crtact"
      
      outlined
    >Create account</v-btn>
     </router-link>
 
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main class="grey lighten-4">
      
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
       
          <!-- <router-view class="router-view"></router-view> -->
      <!-- If using vue-router -->
      <router-view></router-view>

    </v-container>
  </v-main>

  <v-footer app class="grey lighten-2" absolute>
    
  <v-card-text class="black--text">
        <a :href="'/job/'" class="fotter">DEV Community</a>-A constructive and inclusive social network for software developers. With you every step of your journey. <br>
        Built on <a :href="'/job/'" class="fotter">Forem</a> — the <a :href="'/job/'" class="fotter">open source</a> software that powers <a :href="'/job/'" class="fotter">DEV</a> and other inclusive communities. <br>

Made with love and <a :href="'/job/'">Ruby on Rails.</a> DEV Community © 2016 - 2021.
      
      </v-card-text>


  </v-footer>
</v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
data(){
    return{

    }
},
computed:{

},
  created() {
      // this.initialize()
      this.defaultpost()
    
   
    },
methods:{
   ...mapGetters(['defaultpost']),
  
}
}
</script>

<style >
#crtact:hover{
  background-color: rgb(64, 99, 255);
  color: white;
  font-weight: bold;
  

}

#btn1{
    border-radius: 15px;
    
    border-color: rgb(142, 12, 235);
    
}
#crtact{
  color: rgb(52, 52, 248);
  border-color: rgb(119, 8, 199);
}
a:hover{
    color: indigo;
    
    
    
   
}
#search{
    border-radius: 25px;
}
#dev{
     font-weight: bold;
     font-size: 18px;
     font-stretch: condensed;
}

a { 
  text-decoration: none;
   }

  
</style>

