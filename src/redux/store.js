import { createStore } from 'redux'
import shopReducer from './shopReducer';
import { composeWithDevTools } from 'redux-devtools-extension'// it show state in  redux dev tool (chrome)
const store = createStore(shopReducer, composeWithDevTools());
export default store;