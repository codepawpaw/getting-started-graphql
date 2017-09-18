let path , webpackResolve;

path = require('path');
webpackResolve = (
  {
    alias: {
      app: path.resolve(__dirname, "app/"),
      elements: path.resolve(__dirname, "app/elements")
    }
  }
);

module.exports = webpackResolve;
