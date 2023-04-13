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

  input CreateBoardInput{
    writer : String,
    number : Int,
    title: String,
    contents : String
  }

  type Query {
    fetchBoards: [BoardReturn]
  }

  type Mutation{
    createBoards(writer : String, title: String, contents: String): String,
    createBoards2(createBoardInput : CreateBoardInput): String,
    createTokenOfPhone(myphone : String) : String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: (parent /*백앤드에서 파라미터 받을때*/, args/*프론트앤드에서 파라미터 받을때*/) =>{

      const result = [
        {number: 1, writer:"철수", title:"제목입니다~~", contents : "내용이에요@@@"},
        {number: 2, writer:"영희", title:"제목입니다~~", contents : "내용이에요@@@"},
        {number: 3, writer:"훈이", title:"제목입니다~~", contents : "내용이에요@@@"}
      ]

      return result;
    }
  },

  Mutation:{
    createBoards:(_,args)=>{

      console.log(args);

      return "등록에 성공하였습니다"
    },

    createBoards2:(_,args)=>{

      console.log(args);

      return "등록에 성공하였습니다"
    },

    createTokenOfPhone:(_,args) =>{
      //1.휴대폰번호 자릿수 맞는지 확인하기
      const isValid = checkValidationPhone(args.myphone);
  
      if(!isValid){
         console.log("자릿수가 틀립니다.");
         return;     
      }
  
      const token = createToken(6);
  
      if(token == -1){
          return;
      }
  
      printTokenResult(args.myphone, token);

      return "등록 완료!!"
  }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);