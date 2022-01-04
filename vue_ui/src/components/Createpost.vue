<template>
<div class="grey lighten-3"> 

    <v-app-bar app class="grey lighten-3">
     <router-link to="/homelog" > <v-btn dark color="black" class="ma-5" id="dev">DEV</v-btn> </router-link>  &nbsp; &nbsp; &nbsp;
      <h3>Create Post</h3> 
<v-spacer></v-spacer>
<router-link to="/homelog" >
 <v-icon>mdi-close</v-icon> </router-link>

    </v-app-bar>

  <div class="grey lighten-3">
    
<v-main  class="grey lighten-3 justify-center">
     <v-row
    class="justify-center"
    >
        <v-col
          cols="11"
          
          md="5"
         
          
          
        >
<v-card flat  class="  white" elevation="2">
   
    <v-row
    class="justify-center"
    >
        <v-col
          cols="11"
          
          md="13"
         
          
          
        >
    
    <v-text-field v-model="creatpostdata.title" flat solo placeholder="Title"></v-text-field>
   
    <v-text-field v-model="creatpostdata.tags" flat solo placeholder="Tags"></v-text-field>
   <v-row
    class="justify-center"
    >
        <v-col
          cols="11"
          
          md="20"
         
          
          
        >
    <v-toolbar dense>
    <v-overflow-btn
      :items="dropdown_font"
      label="Select font"
      hide-details
      class="pa-0"
    ></v-overflow-btn>

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-divider vertical></v-divider>



      <v-divider vertical></v-divider>

      <v-spacer></v-spacer>

      <v-btn-toggle
        v-model="toggle_multiple"
        color="primary"
        dense
        group
        multiple
      >
        <v-btn
          :value="1"
          text
        >
          <v-icon>mdi-format-bold</v-icon>
        </v-btn>

        <v-btn
          :value="2"
          text
        >
          <v-icon>mdi-format-italic</v-icon>
        </v-btn>

        <v-btn
          :value="3"
          text
        >
          <v-icon>mdi-format-underline</v-icon>
        </v-btn>

       
      </v-btn-toggle>

      <div class="mx-4"></div>

      <v-btn-toggle
        v-model="toggle_exclusive"
        color="primary"
        dense
        group
      >
   

        <v-btn
          :value="2"
          text
        >
          <v-icon>mdi-format-align-center</v-icon>
        </v-btn>

      

        <v-btn
          :value="4"
          text
        >
          <v-icon>mdi-format-align-justify</v-icon>
        </v-btn>
      </v-btn-toggle>
    </template>
  </v-toolbar>
    <v-textarea v-model="creatpostdata.description" flat solo placeholder="Description" ></v-textarea>
    </v-col></v-row>
    
        </v-col></v-row>
</v-card>
</v-col></v-row> <br>
<v-row >
    <v-col cols="10"
          
          md="30">
<v-btn @click="addCreatepost" class=" mt-2 mr-16"  id="cnt1">Publish</v-btn>
        
    </v-col>
</v-row>
<br>

</v-main>
</div>
</div>
  
</template>

<script>
export default {
name:"Createpost",
  data () {
      return {
        dropdown_font: [
          { text: 'Arial' },
          { text: 'Calibri' },
          { text: 'Courier' },
          { text: 'Verdana' },
        ],
        
        toggle_exclusive: 2,
        toggle_multiple: [1, 2, 3],
        creatpostdata:{
          title:"",
          tags:"",
          description:"",
        },
      }
    },

    methods:{
        
        addCreatepost() {
      
        this.$store.dispatch('addActionCreatepost', this.creatpostdata)
        alert("Post Added Sucessfully !!!")
     
      },
      }
}
</script>

<style>
#cnt1{
    background-color: rgb(74, 30, 235); /* Green */
  border: none;
  color: white;
  padding: 2px 70px;
  
  text-align: justify;
  align-items: left;
  align-self: left;
   
  display: inline-block;
  font-size: 16px;


}


</style>