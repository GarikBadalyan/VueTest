import { createStore } from 'vuex'
import counter from "@/modules/counter";

// Create a new store instance.
const store = createStore({
   modules: {
       counter
   }

})

export default store
