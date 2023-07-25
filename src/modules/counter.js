// import mutation from "@/modules/mutation";


export default {
    state () {
        return {
            count: 777
        }
    },

    mutations: {
        increase (state, payload) {
            state.count += payload
        },

        multByFive (state, payload) {
            state.count *= payload
        }
    },
    getters: {
        count(state) {
            return state.count
        },

        multByTree(state) {
            return state.count * 3
        }
    },
    actions: {
        asyncMultByFive({commit}, payload) {
            setTimeout( () => {
                commit('multByFive', payload)
            }, 1000 )
        }
    }
}