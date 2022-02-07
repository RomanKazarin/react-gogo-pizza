import { createStore } from 'redux'
import rootReduser from './redusers'


let store = createStore(rootReduser)

export default store
