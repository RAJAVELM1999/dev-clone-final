<template>
  <div>
    
     <v-container id="vcontain" >
       <!-- {{createpost}} -->
      
      <v-row dense justify="center">
         <!-- v-for="card in createpost.creAll" :key="card.title" -->
         
        <v-col 
        id="col"
          
          v-for="(card, index) in createpost.data.creAll" :key="index"
          
          cols=8
          
          
        >
          <v-card >
               <!-- <v-avatar left="true">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
</v-avatar> -->
           
             <v-card-title id="title">{{card.title}}</v-card-title>
            <v-card-title v-text="card.tags" id="tags" ></v-card-title> 
            <v-card-title  v-text="card.description" class="text-x5-left" ></v-card-title>
       

            <v-card-actions  dense>
              <!-- <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                    <v-icon>mdi-heart</v-icon>hello
                </v-btn> -->
 
              <v-btn id="btnlikecmt1" @click="incrementcount(card.id)" class="ma-3" text>
                
               <v-icon id="like" :style= "likes[card.id] > 0 ? 'color: red' : 'color:grey '">mdi-heart</v-icon>


              <!-- <v-icon large left :class="{ 'green': computer.Online === '1' }"
          >mdi-heart</v-icon> -->

               {{likes[card.id]}}{{count[card.id]}} reactions
              </v-btn> 

              <v-btn  id="btnlikecmt" text >
                <v-icon >mdi-comment</v-icon> Add Comment
              </v-btn>

            <v-spacer></v-spacer>
              <v-btn id="sv">save</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      </div>
</template>


<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:"Posted",
data(){
    return{
      
      fav: true,
      count:'0',
      likes:{},
      
      color:{
        green: 'green',
        grey: 'grey',
        red: 'red'

      },
      ARYcreatpost:[],
      colors: {
        
      }

//  cards: [
       
//         { title: 'title', tags: 'tags', description: 'description', flex: 9 },
       
//       ],
    }
},
computed:{
...mapState({
  
     createpost: (state) => state.auth.createpost,

})
},
  created() {
      // this.initialize()
      
      this.getActionCreatepost()
      
      // this.getpost()
   
    },
methods:{
...mapActions([
      'getActionCreatepost',
    ]),


    incrementcount(postId){
      
      this.count++
      
      if(this.count >=1){
       
       
        this.likes[postId]=((this.likes[postId] || 0)+1);
         
      }
      // if(this.count >=1)
      // {
      //   this.color="green"
      // }
      
      // if(this.count <=0 ){
      //   this.color="grey"
      // }
      
       
     
      
      
    },
    likesONE(postId){
     debugger; // eslint-disable-line no-debugger
        this.count++
      
      if(this.count >=1){
        
       
        this.likes[postId]=((this.likes[postId] || 0)+1);
         
      }
    },
    getpost(){
      this.ARYcreatpost=this.createpost
    }

}
}
</script>

<style>

#title{
  font-weight: bold;
  font-size: 165%;
}
#title:hover{
  color: rgb(128, 102, 240);
  
}
#btnlikecmt{
  
  padding-right: 10px;
  padding-left: 10px;
}
  

#sv{
  background-color: rgb(170, 170, 170);
}
#tags:hover{
background-color: rgba(red, green, blue, alpha);

border-radius: 20px;
}
#col{
  align-items: center;
}
.v-btn {
  text-transform:none !important;
  
}
/* #like:active{
  color:red;
}
i.v-icon.v-icon#like {
  color: red;
}  */
#btnlikecmt1:active{
  color: red;
}
</style>