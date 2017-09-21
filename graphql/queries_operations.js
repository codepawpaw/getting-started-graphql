import TodoQueriesOperations from './todo/todo_queries_operations.js';
import UserQueriesOperations from './user/user_queries_operations.js';

export default {
  ...TodoQueriesOperations,
  ...UserQueriesOperations
};
