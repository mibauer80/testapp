import axios from 'axios'

const state = {
    edarts: []
}
const mutations = {
    UPDATE_EDART (state, payload) {
        state.edarts = payload;
    }
}
const actions = {
    getEdarts ({ commit }) {
        axios.get('https://proven-aviary-293214.ey.r.appspot.com/')
            .then((response) => {
                console.log(response)
                commit('UPDATE_EDART', response.data);
            })
    }
}
const getters = {

}
const edartModule = {
    state,
    mutations,
    actions,
    getters
}

export default edartModule;