//  Queries are use to get an Data from the db
const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Reg{
    id: ID
    name: String
    email: String
    password: String
}
type Cre{
    id: ID
    title: String
    description: String
    tags: String
}
type Readlst{
    id: ID
    title: String
    tags: String
    description: String
    creatpostid: String
    
}
type Comments{
    id: ID
    createpostid: String
    comments: String
    
    
}
type Query
{
    hello:String
    getAll:[Reg]
    creAll:[Cre]
    readAll:[Readlst]
    cmtAll:[Comments]
}

input RegInput
{
    name: String
    email: String
    password: String

}
input CreInput
{
    title: String
    description: String
    tags: String

}
input ReadlstInput
{   
    title: String
    tags: String
    description: String
    creatpostid: String
    

}
input CmntInput
{   
    
    
    createpostid: String
    comments: String
    

}


input IdInput
{
id:String
}

type Mutation
{
    createReg(regs:RegInput):Reg
    createPost(cret:CreInput):Cre
    readList(read:ReadlstInput):Readlst
    commentsList(cmntls:CmntInput):Comments
    deletePost(id:IdInput):String

    
    
}
`;

module.exports = typeDefs;

// createLevel(post:PostInput):Post
    // updateLevel(id:IdInput,post:PostInput):Post