<template>
  <div>
     <h1>Counter555</h1>
    <p>store-i counter -->>:??? {{ count }}</p>
    <button @click="increaseByOne"> avelacnel</button>
    <h1>store-i counter: {{ $store.getters.multByTree }}</h1>

    <button @click="asyncMultByFive(55)"> avelacne async 5 -ov</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  computed: mapGetters(['count']),
  // es ev verevin@ nuynn en nshanakum
  // computed: {
  //   count() {
  //     return this.$store.getters.count
  //   }
  // },

methods: {
  ...mapMutations(['increase']),
  ...mapActions(['asyncMultByFive']),

  increaseByOne() {
    this.increase(10)
  }
}
}
</script>

<style scoped>

</style>