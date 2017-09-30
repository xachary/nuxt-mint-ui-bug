import Vuex from 'vuex'

//此对象名不可改
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      globalVisible: false
    },
    mutations
  })
}

export default createStore
