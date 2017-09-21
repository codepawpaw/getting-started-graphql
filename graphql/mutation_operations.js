import TodoMutationOperations from './todo/todo_mutation_operations.js';
import UserMutationOperations from './user/user_mutation_operations.js';

export default {
  ...TodoMutationOperations,
  ...UserMutationOperations
};
