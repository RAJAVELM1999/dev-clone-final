const { getcreatepostsQuery,putcreatepostQuery,putRegisterQuery,getRegisterQuery } =require ('../../../apiQueries/level');
const { apolloClient} = require('../../../apollo');

const actions = {
  
  async getActionCreatepost({commit}){
 
    const response = await apolloClient.query({
       
           query: getcreatepostsQuery()
           
       });
       commit('post_GET_MUT', response);
   console.log(response);
},

async addActionCreatepost(context,value){
  
  const response = await apolloClient.mutate({
     
         mutation: putcreatepostQuery(),
         variables: {
             cret:{title:value.title,tags:value.tags,description:value.description}
             //  post:{name,type,identifier:this.levelInput}
         }

     });



  context.commit('Add_POST_MUT', value);
 console.log(response);
},

async addActionRegister(context,value){
  
  const response = await apolloClient.mutate({
     
         mutation: putRegisterQuery(),
         variables: {
             regs:{name:value.name,email:value.email,password:value.password}
             //  post:{name,type,identifier:this.levelInput}
         }

     });



  context.commit('Addreg_POST_MUT', value);
 console.log(response);
},

async getActionRegister({commit}){
  
  const response = await apolloClient.query({
     
         query: getRegisterQuery()
     });
     commit('Reg_GET_MUT', response);
 console.log(response);
},

async myActionvalidate(context, value) {
  debugger; // eslint-disable-line no-debugger
  const response = await apolloClient.query({query: getRegisterQuery() });
  const value1 = response.data.getAll;
  

  if (value.email == value1.email && value.password ==value1.password) {
      context.commit('Login_MUT')

  } else {  
      alert("Check The Username And Password !! ");
      // context.commit('Login_MUT')
  }

},



};

module.exports = { actions };
// const axios = require('axios');


  
//  myAction(context,value){
//    setTimeout(()=>
//    context.commit('MUT_VAl',value),1000)

//  },
// async myActionPass(context,value){
//    if(value.objOne =="rajavel" && value.objTwo =="1999"){
//     context.commit('NEW_MUT')
            
//    }
//    else{
//     alert("Check The Username And Password !! ");
//    }
  
//  },
 
//  async actionCourse(context,value){
  
//   const response = await axios.post("http://localhost:1111/addCourse",
//          {
           
//           name: value.obj1,
//           description: value.obj2,
//           level:value.obj3,
//           subjects:value.obj4
//         }
        
//         // {
//         //   name: "rajav",
//         //   description: "welcome",
//         //   level:"level1",
//         //   subjects:"subjects1"
//         // },
//         );
        
//         console.log(response);
       
//         context.commit('CRS_POST_MUT',value);
//         // this.close(); 
//  },
//  async actionCourseGet({commit}){
 
//   const response = await axios.get("http://localhost:1111/getCourse")
//   console.log(response)
//   commit('CRS_GET_MUT', response.data.course)
//  },

//  async actionLavel(context,value){
//   const response = await axios.post("http://localhost:1111/addLevel",
//          {
//           name: value.obj1,
//           type: value.obj2,
//           identifier:value.obj3 
//         });
        
//         console.log(response);
//         context.commit('LEV_POST_MUT',value);
//         // this.close(); 
//  },

//  async actionLavelGet({commit}){
 
//   const response = await axios.get("http://localhost:1111/getLevels")

//   commit('LEV_GET_MUT', response.data.levels)
//   // const val=response.data.levels;
//   // console.log(val);
//   // state.desserts.push(val) 
//   // context.commit('LEV_GET_MUT',val);
//   // state.desserts.push({events:val})
//   // const val=response.data.level;
//   // state.desserts.push(val)
//   // state.desserts.push(response.data.levels)
//   // state.desserts.push({response.data.levels})
//   // state.desserts.push({events: response.data.levels})
//   // debugger;

//   // var rep= response.data.levels;
//   // context.commit('LEV_GET_MUT',value(rep));
 
// },



// // async getUser({commit}) {
// //   try {
// //       const currentUser = await axios.post("http://localhost:1111/addLevel",{name:'rajavel',type:'new',identifier:'rv'})
// //       console.log(currentUser)
// //       // commit(' LEV_POST_MUT', currentUser)
// //       // return currentUser
// //   } catch (err) {
// //       commit('LEV_POST_MUT', null)
// //       throw 'Unable to fetch current user'
// //   }
// // },
// async actionSubjects(context,value){
//   const response = await axios.post("http://localhost:1111/addSubjects",
//          {
//           displayname: value.obj1,
//           identifier: value.obj2,
         
//         });
        
//         console.log(response);
//         context.commit('SUB_POST_MUT',value);
//         // this.close(); 
//  },
//  async actionSubjectsGet({commit}){
 
//   const response = await axios.get("http://localhost:1111/getSubjects")

//   commit('SUB_GET_MUT', response.data.subjects)
//  },
  
//  // Action Post And Gets Start for Skills


//  async actionSkills(context,value){
//   const response = await axios.post("http://localhost:1111/addSkills",
//          {
//           name: value.obj1,
//           description: value.obj2,
         
//         });
        
//         console.log(response);
//         context.commit('SKILLS_POST_MUT',value);
//         // this.close(); 
//  },
//  async actionSkillsGet({commit}){
 
//   const response = await axios.get("http://localhost:1111/getSkills")

//   commit('SKILLS_GET_MUT', response.data.skills)
//  },
 
 



// export default { actions };















 
  // firstAction({commit}) {
  //   setTimeout(()=>
  //     commit('VALIDATE'),3000)
    
  //     // Store.dispatch('firstAction')
      
  //   },