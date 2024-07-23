import { createStore } from 'redux';
import reducer from './reducer/reducer';

let store = createStore(reducer); // reducer값 가져와서 store에 넘겨줌

export default store;