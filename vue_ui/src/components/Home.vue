<template>
  <div>
      <!-- App.vue -->

<v-app>
    

  <v-app-bar app class="grey lighten-5" permanent  elevation="2">
       <router-link to="/" >
      <v-btn dark color="black" class="ma-4" id="dev" >DEV</v-btn> </router-link>
         <v-text-field append-icon="mdi-magnify" outlined class="ma-9 mt-16" color="indigo accent-2" placeholder="search...">
             
         </v-text-field>
    <v-spacer></v-spacer>
  <router-link to="/Createpost" >
    <v-btn class="ma-2 "
      outlined
     color="indigo "
    >Create Post</v-btn> </router-link>
    
   <v-icon fab @click="functionnew">mdi-account</v-icon>
 
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

export default {
    name:"homelog",
data(){
    return{

    }
},
computed:{

},
  created() {
      // this.initialize()
      
    
   
    },
methods:{

}
}
</script>

<style>
a{
    color: rgba(103, 2, 175, 0.842);    
}
a:hover{
    color: indigo;
    
    text-decoration: underline;
    
   
}
#search{
    
    padding: 10px;
     margin-top: 10px;
    /* margin-bottom: 10%; */
    width: 5%; 
    height:109%
   
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