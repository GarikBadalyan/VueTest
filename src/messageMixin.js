export default {
    data() {
        return {
            isOpen: false
        }
    },

    methods: {
        close() {
            this.isOpen = !this.isOpen
        }
    },
}