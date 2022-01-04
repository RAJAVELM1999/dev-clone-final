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
type Query
{
    hello:String
    getAll:[Reg]
    creAll:[Cre]
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

input IdInput
{
id:String
}

type Mutation
{
    createReg(regs:RegInput):Reg
    createPost(cret:CreInput):Cre
    deletePost(id:IdInput):String

    
    
}
`;

module.exports = typeDefs;

// createLevel(post:PostInput):Post
    // updateLevel(id:IdInput,post:PostInput):Post