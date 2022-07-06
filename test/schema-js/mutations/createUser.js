const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql')

const UserType = require('../types/userType')

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    fullName: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
})

module.exports = {
  type: UserType,
  args: {
    input: { type: new GraphQLNonNull(UserInputType) },
  },
  resolve: async (obj, { input }, ctx) => {
    const { email, username, fullName } = input

    return {
      email,
      username,
      fullName,
    }
  },
}
