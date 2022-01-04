<template>
  <div>
    
     <v-container id="vcontain" >
       <!-- {{createpost}} -->
      
      <v-row dense justify="center">
         <!-- v-for="card in createpost.creAll" :key="card.title" -->

        <v-col 
        id="col"
          
          v-for="(card, index) in createpost.creAll" :key="index"
          
          cols=8
          
          
        >
          <v-card flat>
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

              <v-btn id="btnlikecmt1" @click="incrementcount" class="ma-3">
               <v-icon id="like" :color=color>mdi-heart</v-icon>{{count}} reactions
              </v-btn> 

              <v-btn  id="btnlikecmt" flat >
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
      color:"grey",

//  cards: [
       
//         { title: 'title', tags: 'tags', description: 'description', flex: 9 },
       
//       ],
    }
},
computed:{
...mapState({
  
     createpost: (state) => state.auth.createpost.data,

})
},
  created() {
      // this.initialize()
      
      this.getActionCreatepost()
      

   
    },
methods:{
...mapActions([
      'getActionCreatepost',
    ]),
    incrementcount(){
      this.count++
      if(this.count >=1){
          this.color="red"
      }
      
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
</style>