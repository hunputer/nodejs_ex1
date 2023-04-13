import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// The GraphQL schema
const typeDefs = `#graphql
  type BoardReturn{
    number : Int,
    writer : String,
    title : String,
    contents : String
  }

  type Query {
    fetchBoards: [BoardReturn]
  }

  type Mutation{
    createBoard: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: () =>{

      const result = [
        {number: 1, writer:"철수", title:"제목입니다~~", contents : "내용이에요@@@"},
        {number: 2, writer:"영희", title:"제목입니다~~", contents : "내용이에요@@@"},
        {number: 3, writer:"훈이", title:"제목입니다~~", contents : "내용이에요@@@"}
      ]

      return result;
    }
  },

  Mutation:{
    createBoards:()=>{

      return "등록에 성공하였습니다"
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);