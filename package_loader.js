let path , packageResolver;

path = require('path');
packageResolver = (
  {
    alias: {
      graphql: path.resolve(__dirname, "graphql/"),
      models: path.resolve(__dirname, "models/"),
      mutations: path.resolve(__dirname, "graphql/mutations/"),
      queries: path.resolve(__dirname, "graphql/queries/")
    }
  }
);

module.exports = packageResolver;
