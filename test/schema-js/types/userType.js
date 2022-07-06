const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => {
    return {
      email: { type: new GraphQLNonNull(GraphQLString) },
      username: { type: new GraphQLNonNull(GraphQLString) },
      fullName: { type: new GraphQLNonNull(GraphQLString) },
    }
  },
})

module.exports = UserType
