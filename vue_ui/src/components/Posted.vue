<template>
  <div>
    
     <v-container id="vcontain" >
       <!-- {{createpost}} -->
      <!-- <h3>
        <v-alert
      dense
      type="info" v-show="alert"> {{defaultval}}
      
    </v-alert>
        
        </h3>  -->
        <h3 v-if="createpost.length <=0">
          <v-alert
            dense
            type="info" >
          Not Hav A Post Yet!!! Post Atlest '1' To Remove The Highlights.
          </v-alert>
        </h3>
      <v-row dense justify="center" >
         <!-- v-for="card in createpost.creAll" :key="card.title" -->
         
        <v-col 
        id="col"
          
          
          cols=7
          sm=auto
          md=7
          xs=auto
          :default="'Dont Have Post Yet'"
          
          
        >
        
          <v-card class="ma-3 pa-2 text" elevation="1" id="card" cols="auto" 
          v-for="(card, index) in createpost" :key="index" @click="sendpostbrief(card.id)">
      
                <v-row class="mt-2 ">
                  <v-col cols="1" ></v-col>
                        <!-- <v-card-media
            src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
            height="150px">
                      </v-card-media> -->
    

                              <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    >

                    </v-avatar>
                    <p>{{name}}</p> 
                   
                    <!-- <p class="mr-10 mt-5">Jan 7(2 hours ago)</p> -->
    <!-- <v-avatar color="red">
      <span class="white--text text-h5">CJ</span>
    </v-avatar> -->
                      </v-row>

                       
           
                <v-col class="ml-3 mr-5">
                 <v-card-title id="title" v-model="post.title">{{card.title}}</v-card-title>
            <v-card-title v-text="card.tags" id="tags" v-model="post.tags"></v-card-title> 
            <v-card-title  v-text="card.description" class="text-x5-left" v-model="post.description"></v-card-title>
       
      
            <v-card-actions>
              <!-- <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                    <v-icon>mdi-heart</v-icon>hello
                </v-btn> -->
                
                  <v-btn id="btnlikecmt1" @click="incrementcount(card.id)" class="ma-3" text>
                
               <v-icon id="like" :style= "likes[card.id] > 0 ? 'color: red' : 'color: ' ">mdi-heart-outline</v-icon> &nbsp;


              <!-- <v-icon large left :class="{ 'green': computer.Online === '1' }"
          >mdi-heart</v-icon> -->

               {{likes[card.id]}}{{count[card.id]}} reactions
              </v-btn> 
              <!-- {{card.id}} -->
              <v-btn  id="btnlikecmt" text   v-on:click="addcommtmethods(index)">
             
                  <v-icon id="like">mdi-comment-text-outline </v-icon> &nbsp;  {{comment[card.id]}}{{count[card.id]}} Comments
                
              </v-btn>

            
              <p class="mt-4">2 min read </p><v-btn id="sv" @click="examolpmethods(card)">Save</v-btn>

                </v-card-actions>
                
              
                <v-card-actions class="d-flex align-stretch mb-6" v-if="name">
                
                 <v-row>
                   <v-col cols="11">
                    
                      <v-card  v-show="enablecomment==[index]" id="cmtsection"> 
                   
                <v-textarea  v-model="pcomments" placeholder="Comments to be here..."></v-textarea>
                <v-btn @click="subcommt(card.id)" text id="submitcmnt">Submit</v-btn>
                <v-btn @click="enablecomment=null" text>Cancel</v-btn>
              
                  </v-card>
                   </v-col>
                 </v-row>
                 
                
              </v-card-actions>
             
            

           </v-col>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      </div>
</template>


<script>


import {mapState,mapActions, mapGetters} from 'vuex'
// import store from '../store'
export default {
    name:"Posted",
     
data(){
    return{
      pcomments:'',
      enablecomment:'',
      alert:true,
     defaultval:"", 
      value_cmt:"Add",
      fav: true,
      count:'0',
      likes:{},
      comment:"",
      
      color:{
        green: 'green',
        grey: 'grey',
        red: 'red'

      },
      ARYcreatpost:[],
      post:{
        title:"",
        tags:"",
        description:""

      },
      name:"",

//  cards: [
       
//         { title: 'title', tags: 'tags', description: 'description', flex: 9 },
       
//       ],
    }
},
computed:{
   
...mapState({
   
     createpost: (state) => state.auth.createpost,
      // defaultval: (state) => state.auth.defaultval,
      commentlist: (state) => state.auth.commentlist,
}),
},
  
  created(){
      // this.initialize()
      this.authenticated(),
      // this.defultmethods(),
      this.getActionCreatepost(),
      this.usernamefromtoken()
      // this.getpost()
   
    },

methods:{
...mapActions([
      'getActionCreatepost',
    ]),
    ...mapGetters(['authenticated']),
// ================================================================
    addcomment(cardid){
          this.count++
      
      if(this.count >=1){
       
       
        this.comment[cardid]=((this.comment[cardid] || 0) +cardid(this.enablecomment=true ));
         
      }


    },
// ======================================================================
    incrementcount(postId){
      
      console.log(postId);
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
    // ==============================================================
   
   sendpostbrief(cardid)
   {
     console.log(cardid);
     this.$router.push('PostedBrief(cardid)')
   },
  //  =================================================================
   subcommt(value){
      // debugger; // eslint-disable-line no-debugger

     console.log(value,this.pcomments);
     this.$store.dispatch('addCommentAction',{obj1:value,obj2:this.pcomments})
     this.enablecomment=null
     this.pcomments=null


   },

   usernamefromtoken(){
   this.name=localStorage.getItem('user')
    },
// ==========================================

    addcommtmethods(index){

   
      this.enablecomment=index
      console.log("welcome",index);
      // index[this.enablecomment=true];
    
                  
      // this.enablecomment[index]=true
      
      console.log("hi there",index);
      // console.log(this.comment);
    },

    // ================================================================
  examolpmethods(value)
  { 
    console.log(value);
    this.$store.dispatch('addReadinglistAction',value)
  },

  
  savetoreadinglist(cardid){
    this.$store.dispatch('ReadinglistAction',cardid);


  },



    // =============================================================

    defultmethods(){
    //  debugger; // eslint-disable-line no-debugger
     
      
     
      if(this.createpost.length <=0){
        
        console.log('check 1',this.createpost.length);
        // this.defaultval="Not Hav A Post Yet!!! Post Atlest '2' To Remove The Highlights."
      }
      else{
      //  this.defaultval=null;
      this.alert=false
      //  console.log('check 0',value1);
      }
    },


  
   
    

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
  background-color: rgb(212, 212, 212);
  border-radius: 7px;
  
  font-weight: solid;
  font-family: Arial, Helvetica, sans-serif;
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
#card{
  border-radius: 8px;
  border-style: solid;
  /* border-color: rgba(204, 204, 204, 0.973); */
}
.v-icon.outlined {
                  border: 1px solid currentColor;
                  border-radius:50%;
                  height: 56px;
                  width: 56px;
}
p{
  padding: 7px;
  margin-top: 4px;
}
#comment-div{
  width:300px;
  height:300px;
  background-color:rgb(231, 214, 214);
  background-repeat:no-repeat;
  padding: 30px;
  margin-block-end: 100%;
}
#submitcmnt:hover{
  background-color: aquamarine;
}
#cmtsection:hover{
  border-color: rgba(63, 63, 255, 0.795);
  border: blue;
}

</style>