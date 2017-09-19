import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import path from 'path';

import Schema from './graphql';

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.post('/graphql', graphqlHTTP({
  schema: Schema.schema(),
  graphiql: false
}));

app.get('/graphql', graphqlHTTP({
  schema: Schema.schema(),
  graphiql: true
}));

app.use('/', (req, res) => {
	return res.render('index');
});

// Connect mongo database
mongoose.connect('mongodb://root:root@ds017165.mlab.com:17165/bornevia');


// start server
var server = app.listen(3000, () => {
  console.log('Listening at port', server.address().port);
});
