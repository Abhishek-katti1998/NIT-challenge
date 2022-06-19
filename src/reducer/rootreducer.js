import { combineReducers } from "redux";
import {
  medReducer,
  healthReducer,
  loadReducer,
  tokenReducer,
  pathReducer,
  formikReducer,
} from "./reducer";
const rootReducer = combineReducers({
  med: medReducer,
  health: healthReducer,
  loading: loadReducer,
  token: tokenReducer,
  path: pathReducer,
  formik: formikReducer,
});
export default rootReducer;
