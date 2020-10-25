import Vue from 'vue'
import Vuex from 'vuex'

import edart from './modules/edart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        edart
    }
})