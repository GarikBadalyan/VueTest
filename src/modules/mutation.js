export default {
    mutations: {
        increase (state, payload) {
            state.count += payload
        },

        multByFive (state, payload) {
            state.count *= payload
        }
    },

}