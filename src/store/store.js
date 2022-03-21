import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducers";
import logger from "./middleware/logger";
const store = configureStore({
  reducer: reducers,
 //  middleware: [...getDefaultMiddleware(), logger],
});
export default store;
 
// export default function(){
//   return configureStore({
//     reducer: reducers,
//   })
// }