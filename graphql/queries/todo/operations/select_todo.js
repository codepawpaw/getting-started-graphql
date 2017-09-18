import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString
} from 'graphql';
import Path from 'path';

import TodoType from Path.resolve(__dirname, "graphql/type/todo_type.js");
import TodoInput from Path.resolve(__dirname, "graphql/input_template/todo_input.js");
import TodoModel from Path.resolve(__dirname, "models/todo_model.js");
import {Types} from 'mongoose';

class SelectTodo {

  static find() {
    return {
      type: new GraphQLList(TodoType),
      args: {
        data: {
          name: 'data',
          type: TodoInput
        }
      },
      async resolve (root, params, options) {
        return TodoModel
          .find(params.data)
          .exec();
      }
    }
  }

  static remove() {
    return {
      type: GraphQLBoolean,
      args: {
        data: {
          name: 'data',
          type: TodoInput
        }
      },
      resolve (root, params, options) {
        return TodoModel
        .remove(params.data)
        .exec();
      }
    }
  }

}

export default SelectTodo;

