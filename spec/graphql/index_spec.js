import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import Index from "../../graphql/index.js";

describe("#constructor", function() {
	it("return GraphQLSchema with query and mutation type", function() {
		let index, expectedSchema, stubQuery, stubMutation, stubType;

		stubType = new GraphQLObjectType({
		  name: 'BlogPost',
		  fields: {
		    id: {
		      type: GraphQLString
		    }
		  }
		});

		stubQuery = {
		  type: stubType,
		  args: {
		    id: {
		      name: 'id',
		      type: GraphQLString
		    }
		  },
		  resolve (root, params, options) {
		    return {};
		  }
		};

		stubMutation = {};

		spyOn(Index, "mutations").and.returnValue("stub-mutations");
		spyOn(Index, "queries").and.returnValue("stub-queries");

	    expectedSchema = new GraphQLSchema({
		  query: new GraphQLObjectType({
		    name: 'Query',
		    fields: stubQuery
		  })
		});

		//expect(Index.schema).toEqual(expectedSchema);
		expect(false).toEqual(true);
	});
});