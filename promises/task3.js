import { fetchTodo, fetchUser } from './helpers.js';

const resultsAll = await Promise.all([fetchTodo(), fetchUser()]);
const resultRace = await Promise.race([fetchTodo(), fetchUser()]);
console.log(resultsAll);
console.log(resultRace);
