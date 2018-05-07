// GraphQL file
// might not need but ready just in case
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require ('graphql');

// hardcoded database
const members = [
  {id:'1', name: 'Robert G', email: 'blah@gmail.com',
  password:"root"}
];
const MemberType = new GraphQLObjectType({
  name:'member',
  fields:() => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    password: {type:GraphQLString}
  })
});


const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    member:{
      type: MemberType,
      args:{
        id:{type:GraphQLString}
      },
      resolve(parentValue, args){
        for (let i = 0; i < members.length; i++){
          if (members[i].id== args.id){
            return members[i];
          }
        }
      }
    }
  }
});

module.exports = new GraphQLSchema ({
  query: RootQuery
});
