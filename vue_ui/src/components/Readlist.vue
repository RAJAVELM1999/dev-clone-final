<template>
  <div>
      <h4>
          Saved Post's
      </h4>
      <v-card  v-for="(card, index) in readpostlist" :key="index" class="ma-2">
        
        {{card.title}}
        {{card.tags}}
      </v-card>
  
      <!-- <v-card :for="readlist in readpostlist">
          <div>
           {{readlist}}
          </div>
      </v-card> -->
      

  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
name:'Readlist',
data(){
    return{

    }
},
computed:{
   
...mapState({
   
     readpostlist: (state) => state.auth.readpostlist,
      // defaultval: (state) => state.auth.defaultval,

}),

},
created(){
    this.getActionReadlist()
},
methods:{
    ...mapActions(['getActionReadlist'])
},
}
</script>

<style>

</style>