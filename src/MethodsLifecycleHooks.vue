<template>
  <div>
<h1>{{name}}</h1>
 <p id="text">hello</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Narek -->> MethodsLifecycleHooks"
    }
  },

  // В Vue.js хуки жизненного цикла — это методы, которые вызываются на определенных этапах жизненного
  //  цикла компонента, например, при его создании, подключении к DOM или уничтожении.

  beforeCreate() {
    console.log('beforeCreate', this.name)
  },

  created() {
    // amenachisht tex@ vortex zapros en anum backendin da created() -n e
    console.log('created->this.$el', this.$el)
    console.log('created -> this.name11', this.name)
    this.name = 'Garik11'
    console.log('created -> this.name22', this.name)
  },

  beforeMount() {
    console.log('beforeMount')
  },

  mounted() {
    console.log('mounted -> this.name', this.name)
    console.log('this.$el', this.$el)
    console.log(
        'mounted',
        this.$el.querySelector('#text').innerHTML += 'Barev'
    )
  },

  unmounted() {
    console.log('unmountedddddddddddd')
  }

}
</script>

<style scoped>

</style>