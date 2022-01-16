const { getcreatepostsQuery,putcreatepostQuery,putReadlisttQuery,getReadlisttQuery,getCommentQuery,putCommentQuery} =require ('../../../apiQueries/level');
const { apolloClient} = require('../../../apollo');
const axios = require('axios');

const actions = {
  
  async getActionCreatepost({commit}){
 
    const response = await apolloClient.query({
       
           query: getcreatepostsQuery()
           
       });
      //  debugger; // eslint-disable-line no-debugger
       commit('post_GET_MUT', response);
   console.log(response);
},

async addActionCreatepost(context,value){
  // debugger; // eslint-disable-line no-debugger 
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
// ================================================
async addCommentAction(context,value){
  // debugger; // eslint-disable-line no-debugger 
  const response = await apolloClient.mutate({
    
         mutation: putCommentQuery(),
         
         variables: {
          cmntls:{createpostid:value.obj1,comments:value.obj2}
             //  post:{name,type,identifier:this.levelInput}
         }

     });



  context.commit('Add_CMNT_MUT', value);
 console.log(response);
},

async getActionComments({commit}){
  // debugger; // eslint-disable-line no-debugger
  const response = await apolloClient.query({
     
         query: getCommentQuery()
         
     });
     
     commit('CMNT_GET_MUT', response.data.cmtAll);
 console.log(response);
},


// ================================================
async addReadinglistAction(context,value){
  // debugger; // eslint-disable-line no-debugger 
  const response = await apolloClient.mutate({
    
         mutation: putReadlisttQuery(),
         
         variables: {
             read:{title:value.title,tags:value.tags,description:value.description,creatpostid:value.id}
             //  post:{name,type,identifier:this.levelInput}
         }

     });



  context.commit('Add_READ_MUT', value);
 console.log(response);
},
// ========================================================
async getActionReadlist({commit}){
  // debugger; // eslint-disable-line no-debugger
  const response = await apolloClient.query({
     
         query: getReadlisttQuery()
         
     });
     
     commit('READ_GET_MUT', response.data.readAll);
 console.log(response);
},
// =======================================================
// async defaultpost(gettt){
//   if((state.createpost).length <=0)
//       {
//         return state.defaultval
       
//       }
// },


async SignoutAction({ commit }) {
  commit('SET_TOKEN', null)
  commit('SET_USER', null)
  // commit('Signout_Mut')


},

// =====================================================




// ==================================================
// async addActionRegister(context,value){
  
//   const response = await apolloClient.mutate({
     
//          mutation: putRegisterQuery(),
//          variables: {
//              regs:{name:value.name,email:value.email,password:value.password}
//              //  post:{name,type,identifier:this.levelInput}
//          }

//      });



//   context.commit('Addreg_POST_MUT', value);
//  console.log(response);
// },

// async getActionRegister({commit}){
 
//   const response = await apolloClient.query({
     
//          query: getRegisterQuery()
//      });
//     //  debugger; // eslint-disable-line no-debugger
//      commit('Reg_GET_MUT', response);
//  console.log(response);
// },
async registeraction(_,regdata){
  const response= await axios.post('register', regdata)
          
  console.log(response.data);
},




// =================================================================

// async myActionvalidate({commit}, value) {
//   // debugger; // eslint-disable-line no-debugger
//   const response = await apolloClient.query({query: getRegisterQuery()});
//   const value1 = response.data.getAll;
//   // const value2 = response.data.getAll.password;
  
//   // debugger; // eslint-disable-line no-debugger
//   if (value.email == value1[0].email && value.password == value1[0].password) {
//       commit('Login_MUT')

//   } else {  
//       alert("Check The Username And Password !! ");
//       // context.commit('Login_MUT')
//   }
//   commit('Reg_GET_MUT', response);
//  console.log(response);

// },
// =================================================================
async LoginAction({ dispatch }, logindata) {
  const response = await axios.post('login', logindata)
  //  console.log(response.data);
  dispatch('userAction', response.data.name)

  return dispatch('AttemptAction', response.data.token)


},

async AttemptAction({ state, commit }, token) {

  // const token = response.data.token

  if (token) {

    commit('SET_TOKEN', token)

  }

  if (!state.token) {
    return
  }
},

async userAction({ commit }, user) {
  // const user = response.data
  // debugger; // eslint-disable-line no-debugger
  commit('SET_USER', user)
},

// ====================================================





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