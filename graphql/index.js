import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

import MutationOperations from './mutations/mutation_operations.js';
import QueriesOperations from './queries/queries_operations.js';

class Index {

  static mutations() {
    return MutationOperations;
  }

  static queries() {
    return QueriesOperations;
  }

  static schema() {
    let schema;

    schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: Index.queries()
      }),
      mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: Index.mutations()
      })
    });

    return schema;
  }

}

export default Index;