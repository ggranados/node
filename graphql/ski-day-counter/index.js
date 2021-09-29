const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	type SkiDay{
		id: ID!
		date: String!
		mountain: String!
		conditions: Conditions
	}

	type Query{
		totalDays: Int!
		allDays: [SkiDay!]!
	}	

	enum Conditions{
		POWDER
		HEAVY
		ICE
		THIN
	}

	input AddDayInput{
		date: String!
		mountain: String
		conditions: Conditions
	}

	type Mutation{
		removeDay(id: ID!): SkiDay!
		addDay(input: AddDayInput!): SkiDay
	}
`;

/*
const resolvers = {

};
*/

const server = new ApolloServer({
	typeDefs,
	mocks: true
})

server
	.listen()
	.then(({ url }) =>
		console.log(`Server running at ${url}`)
	);