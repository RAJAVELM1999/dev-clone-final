
const Reg = require('./Reg')
const Cre = require('./Cre')


// Resolver for Inseerting the Data ,Updating the Data, Deleting the data

const resolvers = {
    Query: {
        hello: () => { return "Hai There This Is Rajavel" },

        // getAll: async () => { return await Post.find(); },
        getAll: async () => { return await Reg.find(); },
        creAll: async () => { return await Cre.find(); },


    },
    Mutation: {
        createReg: async (parent, args, context, info) => {
            const { name, email, password } = args.regs
            const regs = await new Reg({ name, email, password }).save()
            return regs
        },
        createPost: async (parent, args, context, info) => {
            const { title, description, tags } = args.cret
            const cret = await new Cre({ title, description, tags }).save()
            return cret
        },
        // updateLevel: async (parent, args, context, info) => {
        //     const { id } = args.id;
        //     const { name, type, identifier } = args.post;
        //     const post = await Post.findByIdAndUpdate(id, { name, type, identifier }, { new: true });
        //     return post
        // },
        deletePost: async (parent, args, context, info) => {
            const { id } = args.id;
            await Reg.findByIdAndDelete(id);
            return "One Data Deleted Scucessfully id :" + (id)
        },

    }

}

module.exports = resolvers;