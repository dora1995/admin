import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
const path = require('path')

// 将modules文件夹下的js文件都找出来
const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  let name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})

export default new Vuex.Store({
  modules,
  getters
})
