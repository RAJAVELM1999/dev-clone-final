import gql from 'graphql-tag';

export const getcreatepostsQuery = () => {
  return gql`
        query {
          creAll {
              id
              title
              tags
              description
          }
        }
      `;
};
export const putcreatepostQuery = () => {
  return gql`
  mutation createPost($cret: CreInput){
    createPost(cret: $cret) {
  
  title
  description
  tags
  id
  
    }
  }
    `;
};
// ========================================
export const putCommentQuery = () => {
  return gql`
  mutation commentsList($cmntls: CmntInput){
    commentsList(cmntls: $cmntls) {
      id
      createpostid
      comments
    }
  }
    `;
};
export const getCommentQuery = () => {
  return gql`
  query{
    cmtAll {
      createpostid
      id
      comments
    }
  }
      `;
};
// ==========================================
export const putReadlisttQuery = () => {
  return gql`
  mutation readList($read: ReadlstInput){
    readList (read: $read) {
      title
      tags
      description
      creatpostid
      id
    }
  }
    `;
};
export const getReadlisttQuery = () => {
  return gql`
  query{
    readAll {
     id
     title
     tags
     description
     creatpostid
      
    } 
  }
      `;
};
// ========================================
export const putRegisterQuery = () => {
  return gql`
  mutation createReg($regs: RegInput){
    createReg(regs: $regs) {
      name
      email
      password
      id
    }
  }
    `;
};

export const getRegisterQuery = () => {
  return gql`
        query {
          getAll {
            id
            name
            email
            password
          }
        }
      `;
};




// export const putLevelsQuery = () => {
//   return gql`
//   mutation createLevel($post:PostInput){
//     createLevel(post: $post) {
//       name
//       type
//       identifier
//       id
//     }
//   }
//     `;
// };
// export const updateLevelsQuery = () => {
//   return gql`
//   mutation updateLevel($id: IdInput, $post: PostInput){
//     updateLevel(id: $id, post: $post) {
//       id
//       name
//       type
//       identifier
      
//     }
//   }
//     `;
// };
// export const deleteLevelsQuery = () => {
//   return gql`
//   mutation deleteLevel($id: IdInput){
//     deleteLevel(id: $id)
//   }
  
//     `;
// };