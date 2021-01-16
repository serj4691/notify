import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notify from './notify'
// import VueProgress from 'vue-progress-path'
// Vue.use(VueProgress)

export default new Vuex.Store({
    modules: {
        notify
    }
})