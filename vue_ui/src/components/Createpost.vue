<template>
<div class="grey lighten-3"> 
<v-dialog v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-transition">
    <v-app-bar app class="grey lighten-3">
     <router-link to="/homelog" > <v-btn dark color="black" class="ma-5" id="dev">DEV</v-btn> </router-link>  &nbsp; &nbsp; &nbsp;
      <h3>Create Post</h3> 
<v-spacer></v-spacer>
<router-link to="/homelog" >
 
  <v-btn
            icon
            
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
</router-link>
    </v-app-bar>

  <div class="grey lighten-3">
    
<v-main  class="grey lighten-3 justify-center">
     <v-row
    class="justify-left"
    >
        <v-col
          cols="16"
          
          
          class="ml-9 mr-5"
         
          
          
        >
<v-card text  class="  white" elevation="2">
 
    <v-row justify="start" >
            <v-col cols="5">

                 <v-btn outlined class="ml-5 mt-3" >Add a cover image</v-btn>
            </v-col>
            
     
          </v-row>
    <v-row
    class="justify-left"
    >
        <v-col
          cols="11">

        
    <v-text-field v-model="creatpostdata.title" flat solo placeholder="New post title to be here..." id="title11"></v-text-field>
   
   <!-- <v-select
  id="select"
  chips
  clearable
  multiple
  v-model="creatpostdata.tags" 
  flat 
  solo 
  placeholder="Add upto 4 tags..."
  :items=items
  item-text="name"
 item-value="identifier"
></v-select> -->
      <v-text-field
  id="select"
  chips
  clearable
  multiple
  v-model="creatpostdata.tags" 
  flat 
  solo 
  placeholder="Add upto 4 tags..."
  :items=items
  item-text="name"
 item-value="identifier"
></v-text-field>
   <v-row
    class="justify-left"
    >
        <v-col  
          cols="">
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
    <v-textarea v-model="creatpostdata.description" flat solo placeholder="Write your post content here..." id="desc" ></v-textarea>
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
</v-dialog>
</div>
  
</template>

<script>
export default {
name:"Createpost",
  data () {
      return {
        dialog: true,
         items:[
           {name:'vuejs s1',identifier:'vuejs'},
           {name:'nuxt v1',identifier:'nuxt'},
           {name:'dm c1',identifier:'digital marketing'},

         ],
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
      // debugger; // eslint-disable-line no-debugger 
        this.$store.dispatch('addActionCreatepost', this.creatpostdata).then(()=>{
              alert('New Post Added Sucessfully')
              this.$router.push({
                  name:'homelog'
              })
          }).catch(()=>{
            
              console.log("error on posting a data");
          })
     
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
#title11{
  color: rgb(17, 61, 46);
  font-weight: bold;
  font-size: 45px;
  

}
#select,#desc{
  font-size: 20px;

}

</style>