const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type SkiDay {
    id: ID!
    date: String!
    mountain: String!
    conditions: Conditions!
  }

  enum Conditions {
    POWDER
    ICE
    HEAVY
    CRUSTY
    LIGHT
  }

  type Query {
    totaldays: Int!
    allSkiDays: [SkiDay!]!
  }

  input AddSkiDayInput {
    date: String!
    mountain: String!
    conditions: Conditions!
  }

  type Mutation {
    addSkiDay(input: AddSkiDayInput!): SkiDay!
    removeSkiDay(id: ID!): SkiDay!
  }
  `;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
