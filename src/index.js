const { ApolloServer } = require('apollo-server');

const fs = require('fs');
const path = require('path');

let links = [
    {
        id:1,
        description:'oa',
        url:'website'
    }
]

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
    feed: ()=> links,
    },
    Mutation: {
        post: (parent,args)=>{
            let idCount = links.length

            const link = {
                id: idCount++,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    }
 }

 // 3
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),'utf8'
    ),
    resolvers,
})

server
.listen()
.then(({ url }) =>
    console.log(`Server is running on ${url}`)
);
