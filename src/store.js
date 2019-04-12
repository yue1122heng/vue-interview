import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    updateDataList (state, data) {
      state.dataList = data
    }
  },
  getters: {
    getAverage: state => {
      var sum = 0
      state.dataList.forEach(value => {
        sum += value.data
      })
      return sum / state.dataList.length
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall (context) {
      // TODO
      return mockGenerator()
    }
  }
})
