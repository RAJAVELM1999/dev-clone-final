<template>
  <div>
      <!-- App.vue -->

<v-app>
    

  <v-app-bar app class="grey lighten-5" permanent  elevation="2" flex >
       <router-link to="homelog" >
      <v-btn dark color="black" class="ma-4" id="dev" >DEV</v-btn> </router-link>
         <v-text-field dense append-icon="mdi-magnify"  outlined class="ma-9 mt-16 ml-2 shrink " color="indigo accent-2" placeholder="search...">
             
         </v-text-field>
    <v-spacer></v-spacer>
  <router-link to="/Createpost" >
    <v-btn class="ma-2"
      outlined
     color="indigo "
    >Create Post</v-btn> </router-link>
    <!-- =============================== ===================-->
  
     <!--=========================================working area========================================  -->
   <!-- <v-icon fab>mdi-account</v-icon> -->
   <!-- ++++++++++++++============================================== -->
   <div class=" ml-3 mr-3">
     <v-icon>mdi-bell-ring-outline</v-icon>
   </div>

   <div class=" ml-2 mr-5">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="2"
      offset-x
      flex
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
         
          
        >
          <v-icon color="blue">mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card dense>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content dense>
              <v-list-item-title>{{user}}</v-list-item-title>
              <v-list-item-subtitle>@{{user}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <!-- <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list >
          <v-list-item class="">
            <v-list-item-action>
              <v-btn text >Dashboard</v-btn>
               <v-btn text><router-link to="/Createpost" >Creat post</router-link></v-btn>
              <v-btn text><router-link to="/Readlist" >Reading list</router-link></v-btn>
              <v-btn text>Settings</v-btn>
             
            
              <v-divider></v-divider>
             <!-- <router-link :to="login">
               Signout
             </router-link> -->
              <v-progress-linear
      color="red darken-2"
      rounded
      value="1000"
      class="ma-2"
    ></v-progress-linear>
             <v-btn text @click="signout">Sign out</v-btn>
          
            </v-list-item-action>
           
          </v-list-item>

          <!-- <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="hints"
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item> -->
        </v-list>

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="menu = false"
          >
            Save
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>
  </div>

 
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main class="grey lighten-4">
      
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
       
          <!-- <router-view class="router-view"></router-view> -->
      <!-- If using vue-router -->
      <router-view>
       
      </router-view>

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
import { mapGetters, mapState } from 'vuex'

export default {
    name:"homelog",
data(){
    return{
      fav: true,
      menu: false,
      message: false,
      hints: true,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
},
computed:{
  ...mapState({
     user: (state) => state.auth.user,
     defaultval: (state) => state.auth.defaultval,
  })

},
  created() {
      // this.initialize()
      this.defaultpost()
    
   
    },
methods:{
  ...mapGetters(['defaultpost']),
       
          signout(){
        this.$store.dispatch('SignoutAction').then(() => {
          this.$router.push('/login')
        })
    },
        
}
}
</script>

<style>
a{
    color: rgba(103, 2, 175, 0.842);    
}
a:hover{
    color: indigo;
    
    
    
   
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