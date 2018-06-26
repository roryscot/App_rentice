import { combineReducers } from 'redux';
import notes from "./notes";
import auth from "./auth";


const App_rentice = combineReducers({
  notes,
  auth,
});

export default App_rentice;